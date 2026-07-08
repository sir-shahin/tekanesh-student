import { createContext, useCallback, useRef } from "react";

import WebSocketManager from "core/utils/WebSocketManager";

type SocketContextType = {
  sockets: Map<string, WebSocketManager>;
  getConnection: (endpoint: string) => WebSocketManager;
  releaseConnection: (endpoint: string) => void;
};

export const SocketContext = createContext<SocketContextType>(
  {} as SocketContextType,
);

type Props = {
  children: React.ReactNode;
};

export const SocketProvider: React.FC<Props> = ({ children }) => {
  const socketsRef = useRef<Map<string, WebSocketManager>>(new Map());

  const getConnection = useCallback((endpoint: string) => {
    const sockets = socketsRef.current;

    if (sockets.has(endpoint)) {
      return sockets.get(endpoint) as WebSocketManager;
    }

    const wsManager = new WebSocketManager(endpoint);
    sockets.set(endpoint, wsManager);
    return wsManager;
  }, []);

  const releaseConnection = useCallback((endpoint: string) => {
    const sockets = socketsRef.current;
    if (sockets.has(endpoint)) {
      const wsManager = sockets.get(endpoint);
      if (wsManager && wsManager.is_connected()) {
        wsManager.disconnect();
      }
      sockets.delete(endpoint);
    }
  }, []);

  return (
    <SocketContext.Provider
      value={{ sockets: socketsRef.current, getConnection, releaseConnection }}
    >
      {children}
    </SocketContext.Provider>
  );
};
