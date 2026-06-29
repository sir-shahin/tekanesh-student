import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { HeaderLayout } from "layouts";
import { BreadCrumbsModel } from "core/types";
import theme from "theme";
import {
  CalendarIcon,
  CameraIcon,
  ChartIcon,
  InsightIcon,
  TaskIcons,
} from "uiKit";
import {
  CourseAds,
  CourseInfo,
  CourseList,
  CourseMeetings,
  CourseStatus,
  Lesson,
} from "components";
import { useCoursesStore } from "store";

function TabPanel(props: {
  children: React.ReactNode;
  value: number;
  index: number;
}) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index} dir="rtl">
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const breadcrumbData: BreadCrumbsModel[] = [
  {
    title: " دوره ها",
    link: "/student/courses",
    id: "0",
    color: theme.palette.grey[600],
    active: true,
  },
];

export const CoursesPage: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const [displayEditCourse, setDisplayEditCourse] = useState(false);

  const [value, setValue] = useState(0);
  const [courseId, setCourseId] = useState("");

  const { fetching, fetchCoursesListData } = useCoursesStore();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("event :>> ", event);
    setValue(newValue);
    setDisplayEditCourse(false);
  };

  const handleDisplayEditCourse = (courseId: string) => {
    setCourseId(courseId);
    setDisplayEditCourse(true);
  };

  useEffect(() => {
    fetchCoursesListData();
  }, []);

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
        >
          <Box display={"flex"} gap={"10px"} alignItems={"center"}>
            <TaskIcons
              color={theme.palette.primary[500]}
              width={22.5}
              height={22.5}
            />
            <Typography
              fontSize={"16px"}
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
              دوره ها
            </Typography>
          </Box>
          <Box sx={{ borderBottom: "none", direction: "rtl" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }} // hides underline
              sx={{
                minHeight: 48,
                ".MuiTab-root": {
                  minHeight: 48,
                  color: "text.secondary",
                  padding: 0,
                  display: "flex",
                  gap: "6px",
                },
                ".Mui-selected": {
                  color: "primary.main", // selected tab label color
                },
                ".MuiTabs-list": {
                  display: "flex",
                  gap: "24px",
                },
                ".MuiTabs-scroller": {
                  overflow: "auto !important",
                },
                ".MuiTab-icon": {
                  marginRight: "0 !important",
                },
              }}
            >
              {/* <Tab
                icon={
                  <Box
                    sx={{
                      bgcolor: value === 0 ? "primary.main" : "grey.400",
                      // color: value === 0 ? "white" : "text.primary",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DocumentCourseIcon
                      color={
                        value === 0
                          ? theme.palette.grey[400]
                          : theme.palette.grey[600]
                      }
                    />
                  </Box>
                }
                iconPosition="start"
                label="اطلاعـــــــــات دوره هــــــــــا"
              /> */}

              <Tab
                icon={
                  <Box
                    sx={{
                      bgcolor: value === 0 ? "primary.main" : "grey.400",
                      color: value === 0 ? "white" : "text.primary",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <InsightIcon
                      color={
                        value === 0
                          ? theme.palette.grey[400]
                          : theme.palette.grey[600]
                      }
                    />
                  </Box>
                }
                iconPosition="start"
                label="دوره هــــای من"
              />

              {/* <Tab
                icon={
                  <Box
                    sx={{
                      bgcolor: value === 1 ? "primary.main" : "grey.400",
                      color: value === 1 ? "white" : "text.primary",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CalendarIcon
                      color={
                        value === 1
                          ? theme.palette.grey[400]
                          : theme.palette.grey[600]
                      }
                    />
                  </Box>
                }
                iconPosition="start"
                label="جلســـــــــــات هفتگــــــــی"
              /> */}

              <Tab
                icon={
                  <Box
                    sx={{
                      bgcolor: value === 1 ? "primary.main" : "grey.400",
                      color: value === 1 ? "white" : "text.primary",
                      borderRadius: "50%",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CameraIcon
                      color={
                        value === 1
                          ? theme.palette.grey[400]
                          : theme.palette.grey[600]
                      }
                    />
                  </Box>
                }
                iconPosition="start"
                label="صفحــــه پخش درس"
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              {displayEditCourse ? (
                <>
                  {isMobile ? (
                    <Box display={"flex"} flexDirection={"column"}>
                      <CourseAds courseId={courseId} />
                      <CourseInfo courseId={courseId} />
                    </Box>
                  ) : (
                    <Box display={"flex"} justifyContent={"space-between"}>
                      <Box flex={3} maxWidth={750}>
                        <CourseInfo courseId={courseId} />
                      </Box>
                      <Box flex={1} maxWidth={315}>
                        <CourseAds courseId={courseId} />
                      </Box>
                    </Box>
                  )}
                </>
              ) : (
                <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
                  {!fetching && (
                    <CourseList onDisplayEditCourse={handleDisplayEditCourse} />
                  )}
                </Box>
              )}
            </TabPanel>
            {/* <TabPanel value={value} index={1}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                padding={0}
                gap={"16px"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  flexDirection={isMobile ? "column" : "row"}
                  gap={"8px"}
                >
                  <Typography fontSize={14} fontWeight={700}>
                    لیست جلسات هفتگی
                  </Typography>
                </Box>
                <CourseMeetings />
              </Box>
            </TabPanel> */}
            <TabPanel value={value} index={1}>
              <Lesson />
            </TabPanel>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
