import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Box, Chip, Divider, LinearProgress } from "@mui/material";
import theme from "theme";

import PersianTypography from "core/utils/PersianTypoGraphy.utils";

export const LevelProgress = () => {
  return (
    <Box
      display={"flex"}
      padding={"16px"}
      border={`1px solid ${theme.palette.grey[400]}`}
      borderRadius={"10px"}
      flexDirection={"column"}
      gap={"12px"}
      sx={{
        sm: {
          border: "unset",
          padding: "0px 16px",
        },
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"8px"} alignItems={"center"}>
          <PersianTypography fontSize={"14px"} color={theme.palette.grey[500]}>
            سطح دانشجو
          </PersianTypography>
          <Divider
            orientation="vertical"
            sx={{ height: "8px", textAlign: "center", alignSelf: "center" }}
          />
          <Chip
            label={
              <Box height={"23px"}>
                <PersianTypography display={"inline"} fontSize={"14px"}>
                  5
                </PersianTypography>
                <PersianTypography display={"inline"} fontSize={"10px"}>
                  /
                </PersianTypography>
                <PersianTypography
                  display={"inline"}
                  fontSize={"18px"}
                  fontWeight={700}
                >
                  1
                </PersianTypography>
              </Box>
            }
            icon={
              <StarRateRoundedIcon
                sx={{ height: "15px", width: "15px" }}
                color="warning"
              />
            }
            variant="outlined"
            sx={{
              display: "flex",
              height: "23px",
              gap: "2px",
              padding: "4px",
              alignItems: "center",
              direction: "ltr",
              bgcolor: theme.palette.grey[50],
              borderColor: theme.palette.grey[200],
              "& .MuiChip-icon": { margin: 0 },
              "& .MuiChip-label": { padding: 0 },
            }}
          />
        </Box>
        <Box>
          <PersianTypography fontSize={"12px"} color={theme.palette.grey[600]}>
            سه مرحله باقی مانده تا سطح ۳
          </PersianTypography>
        </Box>
      </Box>

      <Box
        sx={{
          padding: "4px",
          backgroundColor: theme.palette.primary[50],
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box width={"100%"} position={"relative"}>
          <LinearProgress
            color="primary"
            variant="determinate"
            value={50}
            sx={{
              height: "24px",
              borderRadius: "20px",
              backgroundColor: "unset",
              "& .MuiLinearProgress-bar": { borderRadius: "20px" },
            }}
          />
          <Box
            borderRadius={"50%"}
            width={"24px"}
            height={"24px"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"absolute"}
            top={"0%"}
            right={1}
            zIndex={1}
            bgcolor={theme.palette.primary[400]}
            display={"flex"}
          >
            <Box
              borderRadius={"50%"}
              display={"flex"}
              width={"16px"}
              height={"16px"}
              border={"1.5px solid white"}
              bgcolor={"transparent"}
              justifyContent={"center"}
              alignItems={"baseline"}
            >
              <PersianTypography
                height={"16px"}
                display={"inline"}
                fontSize={"12px"}
                color="white"
              >
                1
              </PersianTypography>
            </Box>
          </Box>

          <PersianTypography
            sx={{ position: "absolute", top: "25%", right: "33%" }}
            fontSize={"12px"}
            fontWeight={700}
            color="white"
          >
            4 / 2
          </PersianTypography>
        </Box>

        <Box
          borderRadius={"50%"}
          width={"24px"}
          height={"24px"}
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          border={"4px solid "}
          borderColor={theme.palette.primary[100]}
        >
          <Box
            borderRadius={"50%"}
            display={"flex"}
            width={"16px"}
            height={"16px"}
            border={"1.5px solid "}
            borderColor={theme.palette.primary[400]}
            bgcolor={"transparent"}
            justifyContent={"center"}
            alignItems={"baseline"}
            color={theme.palette.primary[400]}
          >
            <PersianTypography
              height={"16px"}
              display={"inline"}
              fontSize={"12px"}
            >
              2
            </PersianTypography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
