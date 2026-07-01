import {
  Box,
  TextField,
  Typography,
  useMediaQuery,
  Switch,
} from "@mui/material";
import theme from "theme";
import { CustomButton } from "uiKit";

export const ProfileSettings = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const handleSubmit = () => {};
  return (
    <>
      <Box
        bgcolor={theme.palette.grey[200]}
        display={"flex"}
        justifyContent={"space-between"}
        gap={1}
        flexDirection={isMobile ? "column-reverse" : "row"}
      >
        <Box
          flex={1}
          display={"flex"}
          alignItems={isMobile ? "center" : "flex-start"}
          border={1}
          borderColor={"#eee"}
          borderRadius={3}
          px={3}
          py={2.5}
        >
          <Box sx={{ width: "100%" }}>
            <Typography> تنظیمات اعلان ها</Typography>
            <Box
              sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>تکالیف</Typography>
                <Switch defaultChecked />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>پیام ها</Typography>
                <Switch />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>جلسات هفتگی</Typography>
                <Switch defaultChecked />
              </Box>

              <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                <CustomButton variant="contained" sx={{ flex: 1 }}>
                  اتصال به تلگرام
                </CustomButton>
                <CustomButton variant="outlined" sx={{ flex: 1 }}>
                  قطع اتصال
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          width={"100%"}
          flex={1.4}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "7px",
          }}
          border={1}
          borderColor={"#eee"}
          borderRadius={3}
          px={3}
          py={2.5}
        >
          <Typography gutterBottom>تغییر رمز عبور</Typography>

          <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
            رمز عبور فعلی*
          </Typography>
          <TextField
            fullWidth
            sx={{
              borderRadius: "8px",
              height: "34px",
              "& .MuiInputBase-input": {
                fontSize: "11px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "34px",
                borderColor: theme.palette.grey[400],
                "& fieldset": { borderColor: theme.palette.grey[400] },
                "&:hover fieldset": {
                  borderColor: theme.palette.grey[600],
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
          <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
            رمز عبور جدید*
          </Typography>
          <TextField
            fullWidth
            sx={{
              fontSize: "11px",
              borderRadius: "8px",
              height: "34px",
              "& .MuiInputBase-input": {
                fontSize: "11px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "34px",
                borderColor: theme.palette.grey[400],
                "& fieldset": { borderColor: theme.palette.grey[400] },
                "&:hover fieldset": {
                  borderColor: theme.palette.grey[600],
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "11px",
              },
            }}
          />

          <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
            تکرار رمز عبور جدید*
          </Typography>
          <TextField
            fullWidth
            required
            sx={{
              borderRadius: "8px",
              height: "34px",
              "& .MuiInputBase-input": {
                fontSize: "11px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "34px",
                borderColor: theme.palette.grey[400],
                "& fieldset": { borderColor: theme.palette.grey[400] },
                "&:hover fieldset": {
                  borderColor: theme.palette.grey[600],
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
              "& .MuiInputBase-input::placeholder": {
                fontSize: "11px",
              },
            }}
          />
          <Box display={"flex"} justifyContent={"flex-end"} marginTop={"30px"}>
            <CustomButton
              type="submit"
              variant="contained"
              sx={{
                fontSize: "16px",
                backgroundColor: theme.palette.primary[600],
                maxWidth: "222px",
                height: "34px",
                fontWeight: "500",
              }}
              fullWidth
            >
              تغییر رمز عبور{" "}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
