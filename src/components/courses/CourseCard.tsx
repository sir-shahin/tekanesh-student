import { Box, Divider, LinearProgress, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const CourseCard = () => {
  return (
    <Link to={`/student/courses/5`} style={{ cursor: "pointer" }}>
      <Box borderRadius={3} border={1} p={2} borderColor={"#eee"}>
        <img
          src="https://cloud.etekanesh.com/gallery/2025/10/Linkedin_Alireza_Gheymati.jpg"
          alt=""
          width={"100%"}
          style={{ borderRadius: 15 }}
        />
        <Typography fontWeight={"bold"} mb={0.5}>
          دوره جامع آموزش فریلنسری در پلتفرم آپورک
        </Typography>
        <Typography color="gray" fontWeight={100} mb={2}>
          مدرس رضایی
        </Typography>
        <LinearProgress
          variant="determinate"
          value={20}
          aria-label="Export data"
        />

        <Stack
          fontSize={12}
          direction="row"
          mt={2.5}
          justifyContent={"space-evenly"}
        >
          <Box>
            <Typography fontSize={12}>سطح فعلی شما</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              10 /
              <Typography fontSize={22} fontWeight={800}>
                2
              </Typography>
            </Stack>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography fontSize={12}>درصد پیشرفت</Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              color={"primary.main"}
            >
              %<Typography fontWeight={800}>2</Typography>
            </Stack>
          </Box>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Box>
            <Typography fontSize={12}>وضعیت دوره</Typography>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography color="primary" fontWeight={800}>
                فعال
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Link>
  );
};
