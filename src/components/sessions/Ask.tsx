import {
  CheckCircleOutline,
  ErrorOutlineOutlined,
  Link,
} from "@mui/icons-material";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import theme from "theme";
import { CalendarIcon, MonitorIcons } from "uiKit";

import empty from "assets/empty-q.jpg";
export const Ask = () => {
  return (
    <Box
      flex={1}
      borderRadius={3}
      border={1}
      p={2}
      borderColor={"#eee"}
      mb="auto"
    >
      <Stack direction="row" justifyContent={"space-between"} mt={1}>
        <Typography fontWeight={"bold"} mb={0.5}>
          پرسش و پاسخ قبل جلســـه
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={180}
      >
        <Box textAlign={"center"}>
          <img src={empty} />
          <Typography fontSize={10}>هنوز سوالی ثبت نشده</Typography>
        </Box>
      </Box>

      <Stack direction={"row"} columnGap={2} pt={4}>
        <Button variant="outlined" fullWidth>
          ثبت ســـــوال جدیـــــــد
        </Button>
      </Stack>
    </Box>
  );
};
