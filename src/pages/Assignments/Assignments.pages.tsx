import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import theme from "theme";
import { HomeworkIcons } from "uiKit";

import {
  AssignmentListKit,
  AssignmentsFilterKit,
} from "components/assignments";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";

const breadcrumbData: BreadCrumbsModel[] = [
  {
    title: " تکالیـــــــــف",
    link: "/student/Assignments",
    id: "0",
    color: theme.palette.grey[600],
    active: true,
  },
];

export const Assignments = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <>
      <HeaderLayout title="تکالیف " breadcrumb={breadcrumbData} />
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
            <HomeworkIcons
              color={theme.palette.primary[500]}
              width={22.5}
              height={22.5}
            />
            <Typography
              fontSize={"16px"}
              fontWeight={700}
              color={theme.palette.grey[500]}
            >
              وضعیت تکالیف شما در دوره
            </Typography>
          </Box>
        </Box>

        <AssignmentsFilterKit
          searchQuery=""
          setSearchQuery={() => {}}
          selectedTaskStatus=""
          setSelectedTaskStatus={() => {}}
          grouplancingStatusOptions={[1]}
          taskStatusOptions={[1]}
          triggerSearch={() => {}}
        />

        <AssignmentListKit />
      </Paper>
    </>
  );
};
