import { Box, Button, Stack, Typography } from "@mui/material";
import theme from "theme";
import { CalendarIcon } from "uiKit";

import PersianTypography from "core/utils/PersianTypoGraphy.utils";

export const LastSession = () => {
  return (
    <Stack
      direction={"row"}
      bgcolor={theme.palette.grey[100]}
      p={2}
      borderRadius={3}
    >
      <Box flex={1}>
        <img
          src="https://cloud.etekanesh.com/gallery/2025/10/Linkedin_Alireza_Gheymati.jpg"
          alt=""
          width={"100%"}
          style={{ borderRadius: 15 }}
        />
      </Box>
      <Box flex={1} display={"flex"} alignItems={"center"} pr={3}>
        <Box>
          <Typography fontSize={10}>هفتــــــه نهــــــم</Typography>
          <Typography>پتانسیل درآمدزایـی دلاری</Typography>
        </Box>
      </Box>
      <Stack direction={"row"} flex={1} my={"auto"}>
        <Box
          width={25}
          height={25}
          bgcolor={theme.palette.grey[400]}
          borderRadius={"50%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          ml={2}
        >
          <CalendarIcon />
        </Box>
        <Box display={"flex"} flexDirection={"column"} textAlign={"right"}>
          <PersianTypography fontSize={10} color={theme.palette.grey[600]}>
            ساعت :{"  ۱۰:۲۳:۰۰"}
          </PersianTypography>
          <Typography
            fontSize={14}
            fontWeight={700}
            color={theme.palette.grey[500]}
          >
            ۲۹ اسفنــــــد ماه ۱۴۰۴
          </Typography>
        </Box>
      </Stack>

      <Box flex={1} display={"flex"} alignItems={"center"}>
        <Box>
          <Button fullWidth variant="contained" sx={{ mb: 1 }}>
            ورود به جلسه
          </Button>
          <Button fullWidth sx={{ bgcolor: "white" }}>
            جزییات بیشتر
          </Button>
        </Box>
      </Box>
    </Stack>
  );
};
