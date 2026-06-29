import {
  Box,
  Button,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";

import { CourseInfo, LevelProgress } from "components/courses";
import { Monitor } from "@mui/icons-material";

export default function CourseInfoPage() {
  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: " دوره ها",
      link: "/student/courses",
      id: "0",
      color: "gray",
      active: false,
    },
    {
      title: "دوره جامع آموزش فریلنسری در پلتفرم آپورک",
      link: "/student/courses/5",
      id: "1",
      color: "primary.main",
      active: true,
    },
  ];
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <HeaderLayout title=" دوره ها" breadcrumb={breadcrumbData} />
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
          mb={4}
        >
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <Monitor
              width={22.5}
              height={22.5}
              sx={{ color: "primary.main" }}
            />
            <Typography fontSize={"16px"} fontWeight={700}>
              دوره جامع آموزش فریلنسری در پلتفرم آپورک
            </Typography>
          </Box>
        </Box>

        <LevelProgress />

        <Stack direction={{ md: "row" }} py={5}>
          <Box flex={3} px={4}>
            <CourseInfo courseId="fa9c9266-7042-42fe-af40-6ee149f1c28e" />
          </Box>
          <Box flex={2}>
            <Typography mb={2}>
              دوره جامع آموزش فریلنسری در پلتفرم آپورک
            </Typography>
            <Button fullWidth variant="contained" color="primary">
              تماشای ادامه‌ی دوره
            </Button>
          </Box>
        </Stack>
      </Paper>
    </>
  );
}
