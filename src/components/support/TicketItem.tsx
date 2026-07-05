import { Box, Typography, Stack } from "@mui/material";
import React from "react";

type Props = {
  id: string;
  title: string;
  date: string;
  time: string;
  status: "done" | "in-progress" | "new";
};

const statusColor = (s: Props["status"]) => {
  switch (s) {
    case "done":
      return "#2FBF73";
    case "in-progress":
      return "#F5A623";
    default:
      return "#FF6B6B";
  }
};

export const TicketItem: React.FC<Props> = ({
  id,
  title,
  date,
  time,
  status,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      py={2}
      borderBottom="1px solid rgba(0,0,0,0.04)"
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: "60%" }}
      >
        <Box
          width={44}
          height={44}
          borderRadius="50%"
          border={`1px solid ${statusColor(status)}`}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="span"
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: statusColor(status),
            }}
          />
        </Box>
        <Box>
          <Typography fontSize={14} fontWeight={600} color="text.primary">
            {title}
          </Typography>
          <Typography fontSize={12} color="text.secondary">
            شناسه تیکت: {id}
          </Typography>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ width: "40%", justifyContent: "flex-end" }}
      >
        <Typography fontSize={13} color="text.secondary">
          {time}
        </Typography>
        <Typography fontSize={13} color="text.secondary">
          {date}
        </Typography>
      </Stack>
    </Box>
  );
};

export default TicketItem;
