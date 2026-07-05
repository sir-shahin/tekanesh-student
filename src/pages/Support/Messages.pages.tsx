import { CheckCircleOutline, ErrorOutlineOutlined } from "@mui/icons-material";
import {
  Box,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";
import theme from "theme";
import { SupportIcons } from "uiKit";

export default function TicketMessages() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: " پشتیبانی",
      link: "/student/sessions",
      id: "0",
      color: theme.palette.grey[600],
      active: false,
    },
    {
      title: " تیکت ۵۱۶۵۴",
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
              شناسه تیکت ۳۳۵۰۵۸
            </Typography>
          </Box>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Box
              flexDirection={"row"}
              display={"flex"}
              gap={3}
              alignItems={"center"}
            >
              <Typography fontSize={10}>موضوع</Typography>
              <Typography>فعال سازی حساب</Typography>
            </Box>

            <Chip
              label={"در حال انجام"}
              variant="outlined"
              icon={
                0 ? (
                  <CheckCircleOutline
                    color="primary"
                    sx={{ left: -10, position: "relative" }}
                  />
                ) : (
                  <ErrorOutlineOutlined
                    color="warning"
                    sx={{ left: -10, position: "relative" }}
                  />
                )
              }
              sx={{
                fontWeight: "700",
                color: 1
                  ? theme.palette.primary[600]
                  : theme.palette.warning[600],
                bgcolor: 1
                  ? theme.palette.primary[50]
                  : theme.palette.warning[600],
                borderColor: 1
                  ? theme.palette.primary[200]
                  : theme.palette.warning[500],
              }}
            />
          </Stack>
          <Divider />
        </Box>
      </Paper>
    </>
  );
}
{
  /* <SupportIcons color={color} /> */
}
