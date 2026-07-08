import React from "react";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import theme from "theme";
import { SupportIcons } from "uiKit";

import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";

import NewTicketModal from "../../components/support/NewTicketModal";
import TicketTabs from "../../components/support/TicketTabs";

type Ticket = {
  id: string;
  title: string;
  date: string;
  time: string;
  status: "done" | "in-progress" | "new";
};

export const Tickets = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: " پشتیبانی",
      link: "/student/sessions",
      id: "0",
      color: theme.palette.grey[600],
      active: true,
    },
  ];
  return (
    <>
      <HeaderLayout title=" پشتیبانـــــــی" breadcrumb={breadcrumbData} />
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          padding: "24px 28px",
          sm: {
            borderRadius: 0,
            padding: isMobile ? "0" : "unset",
          },
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={"column"}
          gap={"24px"}
          mb={3}
        >
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <SupportIcons
              color={theme.palette.primary[500]}
              width={22.5}
              height={22.5}
            />
            <Typography
              fontSize={"16px"}
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
              تیکت‌های من
            </Typography>
          </Box>

          <TicketsBody />
        </Box>
      </Paper>
    </>
  );
};

const TicketsBody: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const [tickets, setTickets] = React.useState<Ticket[]>([
    {
      id: "33558",
      title: "فعالسازی و غیرفعالسازی حساب کاربری",
      date: "29 فروردین ماه 1403",
      time: "10:23:00",
      status: "done",
    },
    {
      id: "33559",
      title: "فعالسازی و غیرفعالسازی حساب کاربری",
      date: "29 فروردین ماه 1403",
      time: "10:23:00",
      status: "in-progress",
    },
    {
      id: "33560",
      title: "متن ساختگی با تولید سادگی...",
      date: "29 فروردین ماه 1403",
      time: "10:23:00",
      status: "done",
    },
  ]);

  const handleNew = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (title: string) => {
    const next: Ticket = {
      id: String(Date.now()).slice(-5),
      title,
      date: "همین امروز",
      time: "—",
      status: "new",
    };
    setTickets((s) => [next, ...s]);
    setOpen(false);
  };

  return (
    <>
      <TicketTabs rows={tickets} onNew={handleNew} />
      <NewTicketModal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Tickets;
