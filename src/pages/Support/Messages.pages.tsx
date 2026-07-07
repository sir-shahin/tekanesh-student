import {
  CheckCircleOutline,
  Edit,
  ErrorOutlineOutlined,
} from "@mui/icons-material";
import {
  Avatar,
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
import {
  EditIcons,
  LampIcon,
  NoteIcon,
  PenEditIcon,
  PeopleIcons,
  ProfileCircleIcons,
  SupportIcons,
} from "uiKit";
import { RichEditor } from "uiKit/RichTextKit";

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

  const handleEditorChange = (html: string) => {};
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
          minHeight: "95%",
          position: "relative",
          sm: {
            borderRadius: 0,
            padding: isMobile ? "0" : "unset",
          },
        }}
      >
        <Box mb={3}>
          <Box display={"flex"} mb={3} gap={"10px"} alignItems={"center"}>
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

          <Stack direction={"row"} mb={2} justifyContent={"space-between"}>
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
          <Box maxHeight={"53vh"} overflow={"auto"}>
            {/* message */}
            {[0].map((item) => (
              <Box color={"inherit"} pt={3}>
                <Stack
                  direction={"row"}
                  mb={3}
                  justifyContent={"space-between"}
                >
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Avatar sx={{ bgcolor: theme.palette.primary[100] }}>
                      {/* <ProfileCircleIcons /> */}
                      <LampIcon color={theme.palette.primary[600]} />
                    </Avatar>
                    <Typography>پیام شما</Typography>
                  </Box>

                  <Box gap={2} display={"flex"}>
                    <Divider flexItem orientation="vertical" sx={{ my: 1 }} />
                    <Box>
                      <Typography fontSize={10}>ســــــاعت ۱۰:۲۳:۰۰</Typography>
                      <Typography fontSize={14}>
                        ۲۹ فروردین ماه ۱۴۰۳{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
                <Box display={"flex"} gap={3}>
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ borderStyle: "dashed" }}
                  />
                  <Box
                    sx={{ border: "1px dashed #ccc" }}
                    borderRadius={2}
                    width={"100%"}
                    p={3}
                    fontSize={13}
                  >
                    33
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box
          position={"absolute"}
          bottom={0}
          right={0}
          width={"100%"}
          px={5}
          pb={5}
        >
          <Box display={"flex"} alignItems={"center"} gap={2} mb={{ lg: -4 }}>
            <Avatar>
              <PenEditIcon color="gray" />
            </Avatar>
            <Typography>پیام شما</Typography>
          </Box>
          <RichEditor onContentChange={handleEditorChange} />
        </Box>
      </Paper>
    </>
  );
}
{
  /* <SupportIcons color={color} /> */
}
