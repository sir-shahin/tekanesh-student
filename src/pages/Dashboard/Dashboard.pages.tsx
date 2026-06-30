import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { GridRenderCellParams } from "@mui/x-data-grid";

import theme from "theme";
import { HeaderLayout } from "layouts";
import { BreadCrumbsModel } from "core/types";
import {
  CopyIcon,
  DashboardIcon,
  LineChartKit,
  ListIcons,
  MonitorMobileIcons,
  PieChartKit,
  SettingIcon,
} from "uiKit";
import {
  DrawerStudents,
  InfoDashboard,
  LastSession,
  LevelProgress,
  SummaryTask,
  TableStudents,
} from "components";
import { useDashboardStore } from "store/useDashboard.store";
import { PieChartKitDollar } from "uiKit/PieChartKitDollar";
import { LineChartKitDollar } from "uiKit/LineChartKitDollar";
import { useCoursesStore } from "store/useCourses.store";
import { useMessagesStore } from "store/useMessages.store";

export const DashboardPage: React.FC = () => {
  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: "داشبورد",
      link: "/student/dashboard",
      id: "0",
      color: theme.palette.grey[600],
      active: true,
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedCourseUuid, setSelectedCourseUuid] = useState("");
  const [studentData, setStudentData] = useState<GridRenderCellParams>();
  const [changeCharts, setChangesCharts] = useState("rial");

  const { fetchDashOverviewData } = useDashboardStore();
  const { fetchCoursesListData, coursesListData, fetching } = useCoursesStore();
  const { fetchStudentsListMessagesData } = useMessagesStore();

  const openCurrency = Boolean(anchorEl);

  const [open, setOpen] = useState(false);

  const handleOpen = (data: GridRenderCellParams) => {
    setStudentData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseCurrency = () => {
    setAnchorEl(null);
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCourseUuid(event.target.value);
    fetchStudentsListMessagesData({ page: 1, courses: event.target.value });
  };

  useEffect(() => {
    fetchDashOverviewData();
    fetchCoursesListData();
  }, []);

  useEffect(() => {
    if (coursesListData?.length) {
      setSelectedCourseUuid(coursesListData[0].uuid);
    }
  }, [coursesListData]);

  return (
    <>
      <HeaderLayout title="داشبورد" breadcrumb={breadcrumbData} />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"12px"}
        sx={{
          [theme.breakpoints.down("sm")]: {
            gap: "8px",
            background: "white",
            padding: "14px 10px 65px",
            borderRadius: "20px 20px 0px 0px",
          },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            bgcolor: "white",
            borderRadius: "10px",
            padding: "24px 28px",
            sm: {
              borderRadius: 0,
              padding: "unset",
            },
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            mb={1.5}
            gap={"17px"}
            sx={{
              sm: {
                gap: "21px",
              },
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"23px"}
              sx={{
                sm: {
                  gap: "12px",
                },
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box display={"flex"} gap={"10px"} alignItems={"center"}>
                  <DashboardIcon color={theme.palette.primary[600]} />
                  <Typography
                    fontSize={"16px"}
                    fontWeight={700}
                    color={theme.palette.grey[500]}
                  >
                    دوره جامع آموزش فریلنسری در پلتفرم آپورک
                  </Typography>
                </Box>
              </Box>

              <Box
                display={"flex"}
                gap={"11px"}
                sx={{
                  sm: {
                    flexDirection: "column",
                    gap: "19px",
                  },
                }}
              >
                <Box flex={1} gap={1} display={"flex"} flexDirection={"column"}>
                  <PieChartKit />
                  <LevelProgress />
                </Box>

                <Box flex={1.4}>
                  <Box
                    bgcolor={theme.palette.grey[50]}
                    display={"flex"}
                    p={1.5}
                    borderRadius={3}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    mb={1.5}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Box
                        bgcolor={"#F27575"}
                        width={46}
                        height={46}
                        justifyContent={"center"}
                        alignItems={"center"}
                        display={"flex"}
                        borderRadius={3}
                      >
                        <CopyIcon />
                      </Box>
                      <Typography pr={2}>
                        کارهای امـــــروز و این هفته ی مـــــن
                      </Typography>
                    </Box>
                    <Typography
                      fontWeight={"bold"}
                      fontSize={22}
                      color="#F27575"
                      px={1}
                    >
                      2
                    </Typography>
                  </Box>

                  <SummaryTask />
                </Box>
              </Box>
            </Box>
          </Box>

          <LastSession />
        </Paper>
      </Box>
    </>
  );
};
