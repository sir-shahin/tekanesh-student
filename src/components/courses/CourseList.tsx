import React, { useEffect, useState } from "react";
import { Grid2 } from "@mui/material";

import { useCoursesStore } from "store/useCourses.store";

import { CourseCard } from "./CourseCard";
import { CoursesFilterKit } from "./CourseFilter";

type Props = {
  onDisplayEditCourse: (id: string) => void;
};

type CourseListRow = {
  id: string;
  name: string;
  students: number;
  videos: number;
  duration: number;
  status: {
    label: string;
    status: number;
  };
};

export const CourseList: React.FC<Props> = () => {
  // const isMobile = useMediaQuery("(max-width:768px)");
  const [, setRows] = useState<CourseListRow[]>([]);
  // const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const { coursesListData } = useCoursesStore();

  // const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
  //   page: 0,
  //   pageSize: 10,
  // });

  useEffect(() => {
    const mappedRows: CourseListRow[] = coursesListData.map((course) => ({
      id: course.uuid,
      name: course.title,
      students: course.students_count,
      videos: course.episodes_count,
      duration: course.duration,
      status: course.status,
    }));

    setRows(mappedRows);
  }, []);

  // const columns = [
  //   { field: "name", headerName: "نام دوره", flex: 1, minWidth: 200 },
  //   {
  //     field: "students",
  //     headerName: "تعداد دانشجویان",
  //     flex: 1,
  //     minWidth: 120,
  //     renderCell: (params: GridRenderCellParams<any>) => (
  //       <Box display="flex" gap="2px" alignItems="center" rowGap="6px">
  //         <Box
  //           borderRadius="50%"
  //           bgcolor={theme.palette.grey[100]}
  //           height={25}
  //           width={25}
  //           display="flex"
  //           alignItems="center"
  //           justifyContent="center"
  //         >
  //           <ProfileTickIcons width={14} height={14} />
  //         </Box>
  //         <Typography fontSize="12px" color={theme.palette.grey[500]}>
  //           {params?.value} نفر
  //         </Typography>
  //       </Box>
  //     ),
  //   },
  //   {
  //     field: "videos",
  //     headerName: "ویدیوهای هر دوره",
  //     flex: 1,
  //     minWidth: 120,
  //     renderCell: (params: GridRenderCellParams<any>) => (
  //       <Box display="flex" gap="2px" alignItems="center" rowGap="6px">
  //         <Box
  //           borderRadius="50%"
  //           bgcolor={theme.palette.grey[100]}
  //           height={25}
  //           width={25}
  //           display="flex"
  //           alignItems="center"
  //           justifyContent="center"
  //         >
  //           <VideoIcon width={19} height={19} />
  //         </Box>
  //         <Typography fontSize="12px" color={theme.palette.grey[500]}>
  //           {params?.value} ویدیو
  //         </Typography>
  //       </Box>
  //     ),
  //   },
  //   {
  //     field: "duration",
  //     headerName: "مدت زمـــــان دوره",
  //     flex: 1,
  //     minWidth: 120,
  //     renderCell: (params: GridRenderCellParams<any>) => (
  //       <Box display="flex" gap="2px" alignItems="center" rowGap="6px">
  //         <Box
  //           borderRadius="50%"
  //           bgcolor={theme.palette.grey[100]}
  //           height={25}
  //           width={25}
  //           display="flex"
  //           alignItems="center"
  //           justifyContent="center"
  //         >
  //           <CalendarIcon />
  //         </Box>
  //         <Typography fontSize="12px" color={theme.palette.grey[500]}>
  //           {params?.value} ساعت
  //         </Typography>
  //       </Box>
  //     ),
  //   },
  //   {
  //     field: "status",
  //     headerName: "وضعیت دوره",
  //     flex: 1,
  //     minWidth: 120,
  //     renderCell: (params: GridRenderCellParams<any>) => (
  //       <Chip
  //         label={params?.value?.label || "نامشخص"}
  //         variant="outlined"
  //         sx={{
  //           display: "flex",
  //           height: "20px",
  //           padding: "6px",
  //           alignItems: "center",
  //           fontWeight: 600,
  //           fontSize: "12px",
  //           color: theme.palette.primary[400],
  //           bgcolor: theme.palette.primary[50],
  //           borderColor: theme.palette.primary[200],
  //           width: "fit-content",
  //           "& .MuiChip-icon": {
  //             margin: 0,
  //           },
  //           "& .MuiChip-label": {
  //             padding: 0,
  //           },
  //         }}
  //       />
  //     ),
  //   },
  //   {
  //     field: "actions",
  //     headerName: "جزئیـــــــــات",
  //     flex: 1,
  //     minWidth: 140,
  //     renderCell: (params: GridRenderCellParams<any>) => (
  //       <CustomButton
  //         variant="outlined"
  //         sx={{ height: "26px" }}
  //         color="primary"
  //         onClick={() => onDisplayEditCourse(params.row.id)}
  //       >
  //         ویرایــــــــش دوره
  //       </CustomButton>
  //     ),
  //   },
  // ];
  return (
    <>
      <CoursesFilterKit
        searchQuery={""}
        setSearchQuery={() => {}}
        selectedTaskStatus={""}
        setSelectedTaskStatus={() => {}}
        taskStatusOptions={[1]}
        grouplancingStatusOptions={[1]}
        triggerSearch={() => {}}
      />
      <Grid2 container spacing={1}>
        {coursesListData?.map((item) => (
          <Grid2 key={item.uuid} size={4}>
            <CourseCard />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};
