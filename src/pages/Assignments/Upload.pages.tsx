import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import theme from "theme";
import { DocumentUploadIcon, HomeworkIcons } from "uiKit";

import { BreadCrumbsModel } from "core/types";
import { HeaderLayout } from "layouts/header.layout";

export const UploadAssignments: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

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
          <Box display={"flex"} gap={"10px"} alignItems={"center"} mb={3}>
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
          <Box mb={3}>
            <Box
              component="label"
              htmlFor="assignment-upload-input"
              onDragOver={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setIsDragging(false);
                handleFiles(event.dataTransfer.files);
              }}
              sx={{
                width: "100%",
                minHeight: "180px",
                border: "1px dashed",
                borderColor: isDragging
                  ? theme.palette.primary[500]
                  : theme.palette.grey[500],
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                textAlign: "center",
                px: 3,
                py: 4,
                cursor: "pointer",
                bgcolor: isDragging ? theme.palette.primary[50] : "white",
                transition: "all 0.2s ease",
                "&:hover": {
                  borderColor: theme.palette.primary[500],
                  bgcolor: theme.palette.primary[50],
                },
              }}
            >
              <input
                id="assignment-upload-input"
                type="file"
                hidden
                accept="image/*,.pdf,.doc,.docx,.ppt,.pptx,.zip"
                onChange={(event) => handleFiles(event.target.files)}
              />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={56}
                height={56}
                borderRadius="50%"
                bgcolor={theme.palette.primary[100]}
              >
                <DocumentUploadIcon
                  color={theme.palette.primary[500]}
                  width={28}
                  height={28}
                />
              </Box>

              <Typography
                fontSize={15}
                fontWeight={700}
                color={theme.palette.grey[500]}
              >
                بارگذاری فایل تکلیف
              </Typography>
              <Typography fontSize={13} color={theme.palette.grey[600]}>
                فایل را اینجا بکشید یا برای انتخاب کلیک کنید
              </Typography>
              <Typography fontSize={12} color={theme.palette.grey[500]}>
                پشتیبانی از تصاویر، PDF و فایل‌های Word/فشرده
              </Typography>

              {selectedFile && (
                <Box
                  mt={1}
                  px={2}
                  py={1}
                  borderRadius="8px"
                  bgcolor={theme.palette.primary[50]}
                >
                  <Typography fontSize={12} color={theme.palette.primary[700]}>
                    فایل انتخاب‌شده: {selectedFile.name}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>

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
