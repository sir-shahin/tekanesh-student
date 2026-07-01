import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import theme from "theme";
import { HeaderLayout } from "layouts/header.layout";
import { BreadCrumbsModel } from "core/types";
import { HomeworkIcons } from "uiKit";

export const UploadAssignments: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const breadcrumbData: BreadCrumbsModel[] = [
    {
      title: "تکالیف",
      link: "/student/assignments",
      id: "0",
      color: theme.palette.grey[600],
      active: false,
    },
    {
      title: " جزییات تکالیف",
      link: "/student/assignmets/" + id,
      id: "1",
      color: theme.palette.grey[600],
      active: true,
    },
  ];

  return (
    <>
      <HeaderLayout title="تکالیـــــــــف" breadcrumb={breadcrumbData} />
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
        <Box mb={3}>
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
              ارسال تکلیف
            </Typography>
          </Box>
          {/* Upload file */}
          <Box id="upload-container" mb={3}></Box>

          <Box mb={2}>
            <Typography>توضیحات</Typography>
            <TextField fullWidth type="text" rows={3} multiline></TextField>
          </Box>

          <Box textAlign={"left"}>
            <Button sx={{ px: 8 }} variant="contained">
              ارســــــال تکلیـف
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
