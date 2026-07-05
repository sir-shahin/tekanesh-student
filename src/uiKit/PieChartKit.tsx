import React, { useEffect, useState } from "react";

import { Box, Stack, styled, Typography } from "@mui/material";
import { pieArcLabelClasses, PieChart, useDrawingArea } from "@mui/x-charts";

import theme from "theme";
import { useDashboardStore } from "store/useDashboard.store";

export const PieChartKit: React.FC = () => {
  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const today = new Date();
  const todayMonthIndex = +today.toLocaleDateString("fa-IR-u-nu-latn", {
    month: "2-digit",
  });
  const todayYear = +today.toLocaleDateString("fa-IR-u-nu-latn", {
    year: "numeric",
  });

  const { fetchDashboardMonthlyData, dashboardMonthlyData } =
    useDashboardStore();

  const [currentMonthIndex, setCurrentMonthIndex] = useState(todayMonthIndex);
  const [currentYear, setCurrentYear] = useState(todayYear);

  const prevMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 1) {
        setCurrentYear((year) => year - 1);
        return 12;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setCurrentMonthIndex((prev) => {
      if (prev === 12) {
        setCurrentYear((year) => year + 1);
        return 1;
      }
      return prev + 1;
    });
  };

  const isNextDisabled =
    currentYear > todayYear ||
    (currentYear === todayYear && currentMonthIndex >= todayMonthIndex);

  const StyledText = styled("text")(() => ({
    textAnchor: "middle",
    dominantBaseline: "central",
    fill: theme.palette.primary[400],
  }));

  function PieCenterLabel({ children }: { children: React.ReactNode }) {
    const { width, height, left, top } = useDrawingArea();
    return (
      <StyledText x={left + width / 2} y={top + height / 2}>
        {children}
      </StyledText>
    );
  }

  useEffect(() => {
    fetchDashboardMonthlyData(currentYear, currentMonthIndex);
  }, [currentYear, currentMonthIndex]);

  const totalIncome =
    (dashboardMonthlyData?.installment_amount || 0) +
    (dashboardMonthlyData?.intial_amount || 0);

  return (
    <Box
      flex={1}
      padding={"23px 17px 0 17px"}
      border={`1px solid ${theme.palette.grey[400]}`}
      borderRadius={"10px"}
      sx={{
        sm: {
          padding: "19px 15px",
        },
      }}
    >
      <Stack direction={"row"}>
        <Typography>درصد پیشرفت شما</Typography>
      </Stack>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"2px"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PieChart
          series={[
            {
              data: [
                {
                  id: 0,
                  value: dashboardMonthlyData?.intial_amount || 30,
                  color: theme.palette.primary[400],
                },
                {
                  id: 1,
                  value: dashboardMonthlyData?.installment_amount || 10,
                  color: "#ddd",
                },
              ],
              innerRadius: 70,
              cornerRadius: 10,
              paddingAngle: 4,
              arcLabel: (item) =>
                totalIncome > 0
                  ? `${Math.round((item.value / totalIncome) * 100)}%`
                  : "0%",
              arcLabelMinAngle: 15,
            },
          ]}
          width={250}
          height={350}
          slotProps={{
            legend: {
              hidden: true,
              // direction: "row",
              // position: { vertical: "bottom", horizontal: "middle" },
              // padding: 50,
            },
            popper: {
              placement: "left-end",
              sx: {
                zIndex: 10001,
                "& .MuiChartsTooltip-valueCell": {
                  paddingLeft: "10px",
                  paddingRight: "0px !important",
                },
                "& .MuiChartsTooltip-labelCell": {
                  paddingLeft: "10px",
                  paddingRight: 0,
                },
                "& .MuiChartsTooltip-markCell": {
                  paddingLeft: "5px !important",
                  paddingRight: "5px !important",
                },
              },
            },
          }}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fontWeight: "bold",
              fill: "white",
            },
            "& .MuiChartsLegend-series tspan": {
              fill: theme.palette.grey[600],
              fontSize: "12px",
            },
            "& .MuiChartsLegend-mark": {
              rx: "50%",
            },
          }}
          margin={{ top: -10, left: 0 }}
        >
          <PieCenterLabel>
            <tspan fontSize={"53px"} fontWeight={700}>
              ☻
            </tspan>
          </PieCenterLabel>
        </PieChart>
      </Box>
    </Box>
  );
};
