import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "theme";
import { ProfileCircleIcons } from "uiKit";

import { getWSChatURL } from "core/services";
import { useUsersStore } from "store/useUsers.store";

import { SocketContext } from "../../contexts/SocketContext.contexts";
import { ChatDetailItem } from "./ChatDetailItem";
import { ChatTextInput } from "./ChatTextInput";

type ChatApp = {
  send: (payload: { action: string }) => void;
  on: (
    messageType: "message" | "event",
    action: string,
    handler: (message: unknown) => void,
  ) => void;
};

type Props = {
  selectedChat: string;
  onMessageSent?: () => void;
  chatApp: ChatApp;
};

type Message = {
  content: string;
  created_datetime: string;
  uuid: string;
  seen: boolean;
  sender: {
    uuid: string;
    is_me: boolean;
  };
};

type LoadMessagesPayload = {
  data: Message[];
};

type SeenEventPayload = {
  data: {
    message_id: string;
    seen_status: boolean;
  };
};

type NewMessagePayload = {
  extra: {
    clear_input: boolean;
    is_me: boolean;
  };
  data: Message;
};

export const ChatDetail: React.FC<Props> = ({
  selectedChat,
  chatApp,
  onMessageSent,
}) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [messages, setMessages] = useState<Record<string, Message>>({});
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const [loadingMessageDetail, setLoadingMessageDetail] = useState(false);

  const name = useUsersStore((state) => state.name);
  const teacher_uuid = useUsersStore((state) => state.userData?.uuid);

  const { getConnection, releaseConnection } = useContext(SocketContext);
  const chatEndpoint = getWSChatURL(selectedChat);
  const chatSocket = getConnection(chatEndpoint);

  const handleSendMessage = useCallback(
    (message: string) => {
      chatSocket.connect();
      chatSocket.send({
        action: "new_message",
        data: { content: message },
        extra: { clear_input: true, is_me: true },
      });
      chatApp.send({ action: "load_chats" });

      if (onMessageSent) onMessageSent();
    },
    [chatSocket, chatApp, onMessageSent],
  );

  useEffect(() => {
    chatSocket.addEventListener("open", () => {
      setLoadingMessageDetail(true);
      chatSocket.send({
        action: "load_messages",
      });
    });

    chatSocket.on(
      "message",
      "load_messages",
      (message: LoadMessagesPayload) => {
        const customMessage: Record<string, Message> = {};
        message.data.reverse().forEach((item) => {
          customMessage[item.uuid] = {
            ...item,
            sender: {
              ...item.sender,
              is_me: item.sender.uuid === teacher_uuid,
            },
          };
        });

        setMessages(customMessage);
        setLoadingMessageDetail(false);
      },
    );

    chatSocket.on("event", "seen", (event: SeenEventPayload) => {
      const data = event.data;
      const message_id = data.message_id;

      if (
        !message_id ||
        !(message_id in messages) ||
        !messages[message_id].sender.is_me
      ) {
        return;
      }

      setMessages((prevMessages) => ({
        ...prevMessages,
        [message_id]: {
          ...prevMessages[message_id],
          seen: data.seen_status,
        },
      }));
    });

    chatSocket.on("message", "new_message", (message: NewMessagePayload) => {
      if (message.extra?.is_me) {
        message.data.sender.is_me = true;
      } else {
        message.data.sender.is_me = false;
      }

      setMessages((prev) => ({
        ...prev,
        [message.data.uuid]: message.data,
      }));
    });

    chatSocket.connect();

    return () => {
      releaseConnection(chatEndpoint);
    };
  }, [selectedChat]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Header */}
      <Box
        padding={"14px 30px"}
        borderBottom={`1px solid ${theme.palette.grey[300]}`}
      >
        <Box display="flex" gap="10px" alignItems={"center"}>
          <Box width="48px" height="48px" borderRadius="50%">
            <ProfileCircleIcons width={48} height={48} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              fontSize={14}
              fontWeight={700}
              color={theme.palette.grey[600]}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Messages */}
      <Box
        height={isMobile ? "80vh" : "67vh"}
        sx={{
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {loadingMessageDetail ? (
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height="100%"
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {messages &&
              Object.values(messages).map((item) => (
                <ChatDetailItem
                  message={item}
                  selectedChat={selectedChat}
                  messagesEndRef={messagesEndRef}
                  key={item.uuid}
                />
              ))}
          </>
        )}
      </Box>

      {/* Input */}
      <ChatTextInput onSendMessage={handleSendMessage} />
    </>
  );
};
