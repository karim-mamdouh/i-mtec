import { Box, Divider, Stack, Typography } from "@mui/material";
import { contactStyles } from "./ContactUs.style";
import Form from "../../components/organisms/Form/Form.component";
import { contactFormFields } from "./data/contact";
import MailIcon from "@mui/icons-material/Mail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

export const ContactUs = () => {
  return (
    <>
      <Stack component="article" sx={contactStyles.banner}>
        <Typography
          component="h2"
          sx={{ ...contactStyles.bannerText, ...contactStyles.bannerSubtitle }}
        >
          Contact iMT
        </Typography>
      </Stack>
      <Stack component="section" sx={contactStyles.address}>
        <Stack component="ul" sx={contactStyles.addressList}>
          <Typography component="li">
            <Box
              component="a"
              href="geo:30.602947,32.207170;"
              target="_blank"
              sx={contactStyles.addressText}
            >
              <FmdGoodIcon /> Ismailiya - Public Free Zone | Ismailiya, Egypt
            </Box>
          </Typography>
          <Typography component="li">
            <Box
              target="_blank"
              component="a"
              href="mailto:info@i-mtec.com"
              sx={contactStyles.addressText}
            >
              <MailIcon /> Email: info@i-mtec.com
            </Box>
          </Typography>
        </Stack>
      </Stack>
      <Stack component="section"></Stack>
      <Divider sx={contactStyles.divider}></Divider>
      <Stack component="section" sx={contactStyles.formSection}>
        <Form formControllers={contactFormFields}></Form>
      </Stack>
    </>
  );
};
