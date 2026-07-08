import { Box, Paper, Typography } from "@mui/material";
import theme from "theme";
import {
  FinanceRequestIcons,
} from "uiKit";

import { MainTable } from "components/financial";
import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";

const breadcrumbData: BreadCrumbsModel[] = [
  {
    title: "گزارش مالــــــی",
    link: "/student/financial-reports",
    id: "0",
    color: theme.palette.grey[600],
    active: true,
  },
];
export const Reports = () => {
  return (
    <>
      <HeaderLayout title="گزارش مالــــــی" breadcrumb={breadcrumbData} />
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          bgcolor: "white",
          [theme.breakpoints.up("sm")]: {
            borderRadius: "10px",
          },
          padding: "21px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "13px",
        }}
      >
        <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={3}>
          <FinanceRequestIcons
            color={theme.palette.primary[500]}
            width={22.5}
            height={22.5}
          />
          <Typography
            fontSize={"16px"}
            fontWeight={700}
            color={theme.palette.grey[500]}
          >
            مالــــی و پــرداخت هــا
          </Typography>
        </Box>

        <MainTable />
      </Paper>
    </>
  );
};
