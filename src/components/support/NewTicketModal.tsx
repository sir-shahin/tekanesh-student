import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import theme from "theme";
import { MessagesIcons, MessagesMainIcons } from "uiKit";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string, body: string) => void;
};

export const NewTicketModal: React.FC<Props> = ({
  open,
  onClose,
  onSubmit,
}) => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleSubmit = () => {
    onSubmit(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: { borderRadius: 8, p: 1.5 } }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>
        <Box justifyContent={"center"} display={"flex"} mb={1}>
          <Box
            width={60}
            height={60}
            bgcolor={"#eee"}
            borderRadius={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MessagesMainIcons color="gray" width={30} height={30} />
          </Box>
        </Box>
        <Typography>ثبت تیکت جدیــــد</Typography>
      </DialogTitle>
      <DialogContent>
        <Box mt={1}>
          <Typography fontSize={12}>موضوع*</Typography>
          <TextField
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <Typography fontSize={12}>متن پیام *</Typography>
          <TextField
            fullWidth
            placeholder="چه مشکلی پیش آمده است..."
            multiline
            minRows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2, gap: 2 }}>
        <Button sx={{ flex: 1 }} variant="outlined" onClick={onClose}>
          انصراف
        </Button>
        <Button sx={{ flex: 1 }} variant="contained" onClick={handleSubmit}>
          ثبت تیکت جدید
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTicketModal;
