import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import theme from "theme";
import { CustomPagination } from "uiKit";
import { HandCoinIcon } from "uiKit";
import { NoteDollarIcon } from "uiKit/icons/note-dollar.icons";

interface InstallmentData {
  id: number;
  installmentNumber: number;
  dueDate: string;
  amount: string;
  status: { status: number; text: string };
  paymentMethod: string;
  discount: string;
  notes: string;
}

export const MainTable: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  // Mock data - Replace with actual store data
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 10,
  });

  const [installmentData] = useState<InstallmentData[]>([
    {
      id: 1,
      installmentNumber: 1,
      dueDate: "1402/11/29",
      amount: "50,000,000",
      status: { status: 1, text: "تسویه شده" },
      paymentMethod: "کارت",
      discount: "-7%",
      notes: "پرداخت قسط",
    },
    {
      id: 2,
      installmentNumber: 2,
      dueDate: "1403/01/29",
      amount: "50,000,000",
      status: { status: 2, text: "پرداخت شده" },
      paymentMethod: "پرداخت آنلاین",
      discount: "-0%",
      notes: "مشاهده رسید",
    },
  ]);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "dueDate",
        headerName: "تاریخ",
        headerAlign: "center",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<any>) => (
          <Typography fontSize={"14px"} color={theme.palette.grey[600]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "installmentNumber",
        headerName: "مبلغ",
        headerAlign: "center",
        flex: 1,
        minWidth: 80,
        renderCell: (params: GridRenderCellParams<any>) => (
          <Typography fontSize={"14px"} color={theme.palette.grey[600]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "discount",
        headerName: "تخفیف",
        headerAlign: "center",
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<any>) => (
          <Typography
            fontSize={"14px"}
            color={
              params.value?.includes("-")
                ? theme.palette.error.main
                : theme.palette.grey[600]
            }
            sx={{ direction: "ltr" }}
          >
            {params.value}
          </Typography>
        ),
      },
      {
        field: "status",
        headerName: "وضعیت",
        headerAlign: "center",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams) => {
          const statusColor =
            params.value?.status === 1 ? "success" : "warning";
          return (
            <Chip
              label={params.value?.text}
              size="small"
              color={statusColor}
              variant="outlined"
              sx={{
                fontWeight: 600,
                fontSize: "12px",
              }}
            />
          );
        },
      },
      {
        field: "paymentMethod",
        headerName: "روش",
        headerAlign: "center",
        flex: 1,
        minWidth: 100,
        renderCell: (params: GridRenderCellParams<any>) => (
          <Typography fontSize={"14px"} color={theme.palette.grey[600]}>
            {params.value}
          </Typography>
        ),
      },
      {
        field: "notes",
        headerName: "جزئیـــــــــات",
        headerAlign: "center",
        align: "center",
        flex: 1,
        minWidth: 120,
        renderCell: (params: GridRenderCellParams<any>) => (
          <Button fullWidth size="small" variant="outlined">
            {params.value}
          </Button>
        ),
      },
    ],
    [],
  );

  return (
    <>
      {/* Summary Info Boxes */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
          mb: 3,
        }}
      >
        {/* Box 1: Total Installments */}
        <Paper
          elevation={0}
          sx={{
            gap: 2,
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: theme.palette.primary[400],
            }}
          >
            <NoteDollarIcon color="white" />
          </Box>
          <Divider flexItem orientation="vertical" />
          <Box display={"flex"} flexDirection={"column"} gap={0.5} ml={"auto"}>
            <Typography
              fontSize={"12px"}
              color={theme.palette.grey[500]}
              fontWeight={500}
            >
              آخرین پرداخت
            </Typography>
            <Typography fontSize={"16px"}>۲۹ فروردین ماه ۱۴۰۳ </Typography>
          </Box>
        </Paper>

        {/* Box 2: Remaining Balance */}
        <Paper
          elevation={0}
          sx={{
            gap: 2,
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "gray",
              color: "white",
            }}
          >
            <HandCoinIcon />
          </Box>
          <Divider flexItem orientation="vertical" />
          <Box display={"flex"} flexDirection={"column"} ml={"auto"} gap={0.5}>
            <Typography
              fontSize={"12px"}
              color={theme.palette.grey[500]}
              fontWeight={500}
            >
              باقی مانده
            </Typography>
            <Typography
              fontSize={"16px"}
              color={theme.palette.grey[600]}
              fontWeight={700}
            >
              0 تومان
            </Typography>
          </Box>
        </Paper>

        {/* Box 3: Last Payment Date */}
        <Paper
          elevation={0}
          sx={{
            gap: 2,
            p: 2.5,
            borderRadius: 2,
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid rgba(148, 163, 184, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.08)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: theme.palette.primary[600],
              color: "white",
            }}
          >
            <HandCoinIcon color="white" />
          </Box>
          <Divider flexItem orientation="vertical" />
          <Box display={"flex"} flexDirection={"column"} gap={0.5} ml={"auto"}>
            <Typography
              fontSize={"12px"}
              color={theme.palette.grey[500]}
              fontWeight={500}
            >
              مبلغ قسط بعدی
            </Typography>
            <Typography
              fontSize={"14px"}
              color={theme.palette.primary[600]}
              fontWeight={700}
            >
              تسویه شده
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* DataGrid Table */}
      {isMobile ? (
        <Box display={"flex"} flexDirection={"column"} gap={2}>
          {installmentData.map((item) => (
            <Paper
              key={item.id}
              elevation={0}
              sx={{
                p: 2,
                borderRadius: 2,
                border: "1px solid rgba(148, 163, 184, 0.1)",
              }}
            >
              <Stack spacing={1.5}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography fontSize={"12px"} color={theme.palette.grey[500]}>
                    قسط {item.installmentNumber}
                  </Typography>
                  <Typography fontSize={"12px"} color={theme.palette.grey[500]}>
                    {item.dueDate}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography fontSize={"14px"} fontWeight={600}>
                    {item.amount} تومان
                  </Typography>
                  <Chip
                    label={item.status.text}
                    size="small"
                    color={item.status.status === 1 ? "success" : "warning"}
                    variant="outlined"
                  />
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      ) : (
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Box sx={{ direction: "rtl" }}>
            <DataGrid
              autoHeight
              columns={columns}
              rows={installmentData}
              sx={{
                border: 0,
                direction: "rtl",
                "& .MuiDataGrid-columnSeparator": { display: "none" },
                "& .MuiDataGrid-row--borderBottom": {
                  fontSize: "12px",
                  color: theme.palette.grey[600],
                  height: "56px",
                },
                "--DataGrid-rowBorderColor": "unset",
                "& .MuiDataGrid-cell": {
                  textAlign: "center",
                  alignContent: "center",
                  justifyItems: "center",
                },
                "& .MuiDataGrid-columnHeader": {
                  height: "48px !important",
                  backgroundColor: theme.palette.grey[50],
                  fontWeight: 700,
                  fontSize: "13px",
                  color: theme.palette.grey[700],
                },
              }}
              disableColumnFilter
              disableColumnResize
              slots={{
                pagination: CustomPagination,
              }}
              disableColumnMenu
              disableRowSelectionOnClick
              pagination
              paginationMode="client"
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              rowCount={installmentData.length}
            />
          </Box>
        </Paper>
      )}
    </>
  );
};
