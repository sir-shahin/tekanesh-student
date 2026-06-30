import { ErrorOutline } from "@mui/icons-material";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
import theme from "theme";
import { EyeIcon } from "uiKit";

export const SummaryTask = () => {
  return (
    <Box
      border={1}
      borderColor={"#eee"}
      borderRadius={3}
      p={2.5}
      minHeight={"calc(100% - 82px)"}
    >
      <Typography fontWeight={600} mb={3}>
        وضعیت تکالیف شما در دوره
      </Typography>

      <Box display={"flex"} justifyContent={"space-between"} mb={2}>
        <Box display={"flex"} gap={2}>
          <Typography color="gray">1</Typography>
          <Typography fontSize={14}>عنوان</Typography>
        </Box>
        <Stack direction={"row"} columnGap={1}>
          <Chip
            label="ارسال شده"
            variant="outlined"
            color="primary"
            icon={<ErrorOutline sx={{ position: "relative", left: -8 }} />}
            sx={{ bgcolor: theme.palette.primary[50] }}
          />
          <Box
            display={"flex"}
            border={1}
            borderColor={"#ccc"}
            borderRadius={2}
            width={32}
            height={32}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ "&:hover": { bgcolor: "#eee", cursor: "pointer" } }}
          >
            <EyeIcon width={20} height={20} />
          </Box>
        </Stack>
      </Box>

      <Button fullWidth variant="outlined" sx={{ mt: 3 }}>
        بـــــرو به صفحــــــــه تکالیف
      </Button>
    </Box>
  );
};
