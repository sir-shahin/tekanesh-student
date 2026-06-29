import {
  CheckCircleOutline,
  ErrorOutlineOutlined,
  Link,
} from "@mui/icons-material";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import theme from "theme";
import { CalendarIcon, MonitorIcons } from "uiKit";

export const Details = () => {
  return (
    <Box flex={1} borderRadius={3} border={1} p={2} borderColor={"#eee"}>
      <img
        src="https://cloud.etekanesh.com/gallery/2025/10/Linkedin_Alireza_Gheymati.jpg"
        alt=""
        width={"100%"}
        style={{ borderRadius: 15 }}
      />
      <Stack direction="row" justifyContent={"space-between"} mt={1}>
        <Typography fontWeight={"bold"} mb={0.5}>
          اطلاعات جلســـه | هفتـــه نهـــم |
        </Typography>
        <Chip
          label="برگزار شده"
          variant="outlined"
          icon={
            true ? (
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
            color: true
              ? theme.palette.primary[600]
              : theme.palette.warning[600],
            bgcolor: true
              ? theme.palette.primary[50]
              : theme.palette.warning[600],
            borderColor: true
              ? theme.palette.primary[200]
              : theme.palette.warning[500],
          }}
        />
      </Stack>

      <Box display={"flex"} columnGap={2} alignItems={"center"} mt={2}>
        <Box
          width={30}
          height={30}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={1}
          borderColor={"#eee"}
        >
          <CalendarIcon />
        </Box>
        <Typography fontSize={14}>
          سه شنبــــه ۲۹ فروردیــــن ماه ۱۴۰۳{" "}
        </Typography>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Typography fontSize={14}>ســــــاعت ۱۰:۲۳:۰۰</Typography>
      </Box>

      <Box display={"flex"} columnGap={2} alignItems={"center"}>
        <Box
          width={30}
          height={30}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={1}
          borderColor={"#eee"}
          color={"#757785"}
        >
          <Link color="inherit" fontSize="small" />
        </Box>
        <Typography
          fontSize={14}
          component={"a"}
          target="_blank"
          color="#3993AF"
          href="https://meet.google.com/"
          sx={{ cursor: "pointer" }}
        >
          https://meet.google.com/tmv-vcan-tabdfjv
        </Typography>
      </Box>

      <Box display={"flex"} columnGap={2} alignItems={"center"}>
        <Box
          width={30}
          height={30}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          border={1}
          borderColor={"#eee"}
        >
          <MonitorIcons color="#757785" />
        </Box>
        <Typography fontSize={14}>
          اولین قدم به سمت تبدیل شدن به یک LinkedIn Pro را در کنار ما بردارید
        </Typography>
      </Box>

      <Stack direction={"row"} columnGap={2} pt={4}>
        <Button variant="outlined" fullWidth>
          افزودن به تقویم
        </Button>
        <Button variant="contained" fullWidth>
          ورود به جلسه
        </Button>
      </Stack>
    </Box>
  );
};
