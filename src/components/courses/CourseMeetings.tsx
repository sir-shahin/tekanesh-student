import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircleOutline, ErrorOutlineOutlined } from "@mui/icons-material";
import { Box, Button, Chip, Typography, useMediaQuery } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridSortModel,
} from "@mui/x-data-grid";
import theme from "theme";
import {
  CalendarIcon,
  CustomPagination,
  DocumentUploadIcon,
  VideoIcon,
} from "uiKit";

import emptyImage from "assets/empty-state.jpg";
import { PersianConvertDate } from "core/utils";
import PersianTypography from "core/utils/PersianTypoGraphy.utils";
import { useCoursesStore } from "store/useCourses.store";

type CourseMeetingRow = {
  id: string;
  number: string;
  week: string;
  title: string;
  date: string;
  time?: string;
  fileName?: string;
  uploaded?: boolean;
  status: string;
};

const generateWeek = (num: number) => {
  // `هفته ${["اول", "دوم", "سوم", "چهارم"][index % 4]}`;
  const special: Record<number, string> = {
    1: "هفتــــــه اول",
    3: "هفتــــــه سوم",
  };

  if (special[num]) return special[num];

  const ones = ["", "یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه"];
  const teens = [
    "ده",
    "یازده",
    "دوازده",
    "سیزده",
    "چهارده",
    "پانزده",
    "شانزده",
    "هفده",
    "هجده",
    "نوزده",
  ];
  const tens = [
    "",
    "",
    "بیست",
    "سی",
    "چهل",
    "پنجاه",
    "شصت",
    "هفتاد",
    "هشتاد",
    "نود",
  ];
  const hundreds = [
    "",
    "صد",
    "دویست",
    "سیصد",
    "چهارصد",
    "پانصد",
    "ششصد",
    "هفتصد",
    "هشتصد",
    "نهصد",
  ];

  function numberToWords(n: number) {
    const parts = [];

    if (n >= 100) {
      parts.push(hundreds[Math.floor(n / 100)]);
      n %= 100;
    }

    if (n >= 20) {
      parts.push(tens[Math.floor(n / 10)]);
      n %= 10;
      if (n > 0) parts.push(ones[n]);
    } else if (n >= 10) {
      parts.push(teens[n - 10]);
      n = 0;
    }

    if (n > 0) parts.push(ones[n]);

    return parts.join(" و ");
  }

  return "هفتــــــه  " + numberToWords(num) + "م";
};

export const CourseMeetings: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const [rows, setRows] = useState<CourseMeetingRow[]>([]);

  const { fetchCoursesMeetingsData, fetching, coursesMeetingsData } =
    useCoursesStore();

  const nowDate = (meetDate: string) => {
    const date = new Date(meetDate);
    const now = new Date();
    return date < now ? "برگزار شده" : "برگزار نشـــــده";
  };

  useEffect(() => {
    const mapped: CourseMeetingRow[] = coursesMeetingsData.map(
      (item, index) => {
        const date = new Date(item?.meeting_datetime);
        const now = new Date();
        return {
          id: item?.meeting_datetime,
          number: String(coursesMeetingsData.length - index).padStart(2, "0"),
          week: generateWeek(coursesMeetingsData.length - index),
          title: item.course.title,
          date: PersianConvertDate(item?.meeting_datetime),
          time: item?.meeting_datetime?.split("T")[1]?.split(".")[0],
          fileName: item?.meet_link,
          uploaded: item.is_notified,
          status: date < now ? "برگزار شده" : "برگزار نشـــــده",
        };
      },
    );
    setRows(mapped);
  }, [fetching]);

  useEffect(() => {
    fetchCoursesMeetingsData();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "number",
      headerName: "",
      flex: 0.3,
      renderCell: (params: GridRenderCellParams) => (
        <Typography fontWeight="bold" fontSize={22} color="#aaaaaa80">
          {params.value}
        </Typography>
      ),
    },
    {
      field: "title",
      headerName: "",
      flex: 2,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={"right"}
          justifyContent={"flex-start"}
        >
          <Typography fontSize={10} color={theme.palette.grey[600]}>
            {params.row.week}
          </Typography>
          <Typography
            fontSize={14}
            fontWeight={700}
            color={theme.palette.grey[500]}
          >
            {params.value}
          </Typography>
        </Box>
      ),
    },
    {
      field: "date",
      headerName: "",
      flex: 1.2,
      renderCell: (params: GridRenderCellParams) => (
        <Box display={"flex"} gap={"4px"} alignItems={"center"}>
          <Box
            width={25}
            height={25}
            bgcolor={theme.palette.grey[400]}
            borderRadius={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CalendarIcon />
          </Box>
          <Box display={"flex"} flexDirection={"column"} textAlign={"right"}>
            <PersianTypography fontSize={10} color={theme.palette.grey[600]}>
              ساعت :{params.row.time}{" "}
            </PersianTypography>
            <Typography
              fontSize={14}
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
              {params.row.date}
            </Typography>
          </Box>
        </Box>
      ),
    },
    {
      field: "status",
      headerName: "",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <Box
          display={"flex"}
          justifyContent={"center"}
          textAlign={"center"}
          width={"100%"}
        >
          <Chip
            label={params.value}
            variant="outlined"
            icon={
              params.row.status ? (
                <CheckCircleOutline
                  color="primary"
                  sx={{ left: -8, position: "relative" }}
                />
              ) : (
                <ErrorOutlineOutlined color="warning" />
              )
            }
            sx={{
              fontWeight: "700",
              color: params.row.status
                ? theme.palette.primary[600]
                : theme.palette.warning[600],
              bgcolor: params.row.status
                ? theme.palette.primary[50]
                : theme.palette.warning[600],
              borderColor: params.row.status
                ? theme.palette.primary[200]
                : theme.palette.warning[500],
            }}
          />
        </Box>
      ),
    },
    {
      field: "uploaded",
      headerName: "",
      flex: 1,
      sortable: false,
      renderCell: (params: GridRenderCellParams) =>
        params.row.uploaded ? (
          <Link
            to={params.row.fileName}
            target="_blank"
            style={{
              textAlign: "center",
              backgroundColor: theme.palette.primary[600],
              width: "100%",
              color: "white",
              borderRadius: 7,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            ورود به جلسه
          </Link>
        ) : (
          <Button href="/student/sessions/5" variant="outlined" fullWidth>
            جزییات
          </Button>
          // <Box
          //   sx={{
          //     border: "1px dashed rgba(104, 111, 130, 0.5)",
          //     width: "100%",
          //     height: "37px",
          //     fontSize: "12px",
          //     borderRadius: "10px",
          //   }}
          //   display={"flex"}
          //   justifyContent={"space-between"}
          // >
          //   <Box
          //     display={"flex"}
          //     gap={"4px"}
          //     alignItems={"center"}
          //     padding={"4px"}
          //   >
          //     <Box
          //       display={"flex"}
          //       justifyContent={"center"}
          //       alignItems={"center"}
          //       bgcolor={theme.palette.grey[400]}
          //       width={27}
          //       height={27}
          //       borderRadius={"50%"}
          //     >
          //       <DocumentUploadIcon color="grey" />
          //     </Box>
          //     <Typography
          //       fontSize={12}
          //       fontWeight={700}
          //       color={theme.palette.grey[600]}
          //     >
          //       فایل موجود نیست
          //     </Typography>
          //   </Box>
          // </Box>
        ),
    },
  ];

  return (
    <>
      {!fetching ? (
        <>
          {isMobile ? (
            <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
              {coursesMeetingsData?.map((item) => (
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"15px"}
                  m={"0 -10px"}
                >
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    flexDirection={"column"}
                  >
                    <Typography
                      fontSize={"12px"}
                      color={theme.palette.grey[500]}
                      fontWeight={700}
                    >
                      {item?.course?.title}
                    </Typography>
                  </Box>

                  <Box display={"flex"} gap={"11px"} alignItems={"center"}>
                    <Box
                      width={25}
                      height={25}
                      bgcolor={theme.palette.grey[400]}
                      borderRadius={"50%"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <CalendarIcon />
                    </Box>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      textAlign={"right"}
                    >
                      <Typography fontSize={10} color={theme.palette.grey[600]}>
                        ســــــاعت :
                        {
                          item?.meeting_datetime?.split("T")[1]?.split(".")[0]
                        }{" "}
                      </Typography>
                      <Typography
                        fontSize={14}
                        fontWeight={700}
                        color={theme.palette.grey[500]}
                      >
                        {PersianConvertDate(item?.meeting_datetime)}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display={"flex"} gap={"11px"} alignItems={"center"}>
                    <Typography fontSize={12} color={theme.palette.grey[600]}>
                      وضعیت جلسه{" "}
                    </Typography>
                    <Chip
                      label={nowDate(item?.meeting_datetime)}
                      variant="outlined"
                      sx={{
                        fontWeight: "700",
                        color: nowDate(item?.meeting_datetime)
                          ? theme.palette.primary[400]
                          : theme.palette.warning[500],
                        bgcolor: nowDate(item?.meeting_datetime)
                          ? theme.palette.primary[50]
                          : theme.palette.warning[600],
                        borderColor: nowDate(item?.meeting_datetime)
                          ? theme.palette.primary[200]
                          : theme.palette.warning[500],
                        fontSize: "12px",
                        minWidth: "100px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      border: "1px dashed",
                      width: "100%",
                      height: "37px",
                      fontSize: "12px",
                      borderRadius: "10px",
                      borderColor: item?.meet_link
                        ? theme.palette.primary[600]
                        : theme.palette.grey[600],
                    }}
                    display={"flex"}
                    textAlign={"center"}
                    justifyItems={"center"}
                    alignItems={"center"}
                    padding={"4px"}
                    overflow={"hidden"}
                  >
                    {
                      <Link
                        to={item?.meet_link}
                        target="_blank"
                        style={{ cursor: "pointer" }}
                      >
                        {" "}
                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          borderRadius={"50%"}
                          color={
                            item?.meet_link
                              ? theme.palette.primary[600]
                              : theme.palette.grey[600]
                          }
                          gap={"4px"}
                        >
                          {item?.meet_link ? (
                            <VideoIcon width={16} height={16} color="#108b62" />
                          ) : (
                            <DocumentUploadIcon color="grey" />
                          )}
                          {item?.meet_link
                            ? item?.meet_link
                            : "فایل موجود نیست"}
                        </Box>
                      </Link>
                    }
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <Box sx={{ width: "100%", direction: "rtl" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                hideFooterSelectedRowCount
                disableColumnMenu
                disableRowSelectionOnClick
                hideFooter={false}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    display: "none",
                  },

                  fontFamily: "inherit",

                  border: 0,
                  direction: "rtl",
                  "& .MuiDataGrid-row": {
                    paddingBottom: "8px",
                  },
                  "& .MuiDataGrid-columnSeparator": { display: "none" },
                  "& .MuiDataGrid-row--borderBottom": {
                    border: "1px solid",
                    borderRadius: "10px",
                    borderColor: theme.palette.grey[400],
                    fontSize: "12px",
                    color: theme.palette.grey[600],
                    height: "40px",

                    [theme.breakpoints.down("sm")]: {
                      border: "none",
                      borderBottom: "1px solid",
                      borderColor: theme.palette.grey[400],
                      borderRadius: "unset",
                    },
                  },
                  "--DataGrid-rowBorderColor": "unset",
                  "& .MuiDataGrid-cell": {
                    alignItems: "center",
                    justifyContent: "right",
                    display: "flex",
                  },
                  "& .MuiDataGrid-columnHeader": {
                    height: "40px !important",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    overflow: "hidden !important",
                  },
                  "& .MuiDataGrid-main": {
                    scrollbarWidth: "none",
                  },
                  "& .MuiDataGrid-scrollbar": {
                    scrollbarWidth: "none",
                  },
                  "& .MuiDataGrid-main::-webkit-scrollbar": {
                    display: "none",
                  },
                }}
                sortModel={sortModel}
                onSortModelChange={setSortModel}
                slots={{ pagination: CustomPagination }}
              />
            </Box>
          )}
        </>
      ) : (
        !rows.length && (
          <Box
            width="100%"
            justifyContent={"center"}
            alignItems={"center"}
            height={500}
            display={"flex"}
          >
            <Box
              component={"img"}
              borderRadius={"50%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              src={emptyImage}
            />
          </Box>
        )
      )}
    </>
  );
};
