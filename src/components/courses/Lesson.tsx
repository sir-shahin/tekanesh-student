import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { CourseInfo } from "./CoursesInfo";
import { DocumentDownloadIcon } from "uiKit";
import theme from "theme";

export const Lesson: React.FC = () => {
  return (
    <>
      <Stack direction={"row"} columnGap={4}>
        <Box flex={5}>
          <Stack direction={"row"} gap={1} mb={2}>
            <Button fullWidth color="primary" variant="contained">
              ویدیوی بعدی
            </Button>
            <Button fullWidth color="primary" variant="outlined">
              ویدیوی قبلی
            </Button>
          </Stack>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            border={"1px dashed gray"}
            borderRadius={2}
            alignItems={"center"}
            px={2}
            py={0.5}
            mb={4}
            sx={{
              cursor: "pointer",
              "&:hover": { bgcolor: theme.palette.secondary[100] },
            }}
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton color="primary">
                <DocumentDownloadIcon />
              </IconButton>
              <Typography color="primary" fontSize={14}>
                دانلود فایل های ضمیمه
              </Typography>
            </Box>
            <Typography fontSize={12} color="gray">
              (سایز: ۵۵MB)
            </Typography>
          </Box>

          <Typography mb={1}>
            آشنایـــی با نحوه‌ی قیمت‌گــــذاری و ساخت مـــــدارک 
          </Typography>
          <Typography fontSize={12} color="gray">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </Typography>
        </Box>
        <Box flex={4}>
          <Typography fontWeight={600} mb={2} color="gray">
            محتوای دوره
          </Typography>
          <Divider sx={{ mb: 1 }} />
          <CourseInfo courseId="fa9c9266-7042-42fe-af40-6ee149f1c28e" />
          <Button fullWidth variant="outlined" sx={{ mt: 5 }}>
            سوال داریـــد؟ با ما در تماس باشید
          </Button>
        </Box>
      </Stack>
    </>
  );
};
