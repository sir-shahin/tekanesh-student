import { Box, Paper, Stack, Typography, useMediaQuery } from "@mui/material";
import { Ask, Details } from "components/sessions";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";
import theme from "theme";
import { MonitorIcons } from "uiKit";

export const SessionDetails = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: "جلسات هفتگی",
      link: "/student/sessions",
      id: "0",
      color: theme.palette.grey[600],
      active: false,
    },
    {
      title: "جزییات",
      link: "/student/sessions/5",
      id: "1",
      color: theme.palette.primary[600],
      active: true,
    },
  ];
  return (
    <>
      <HeaderLayout title="جلسات هفتگی" breadcrumb={breadcrumbData} />
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "white",
          borderRadius: "10px",
          padding: "24px 28px",
          [theme.breakpoints.down("sm")]: {
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
            <MonitorIcons
              color={theme.palette.primary[500]}
              width={22.5}
              height={22.5}
            />
            <Typography
              fontSize={"16px"}
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
              جزئیـــــات جلســــــه
            </Typography>
          </Box>
        </Box>

        <Stack direction={"row"} columnGap={1}>
          <Details />
          <Ask />
        </Stack>
      </Paper>
    </>
  );
};
