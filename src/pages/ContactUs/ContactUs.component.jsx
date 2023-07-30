import { Box, Divider, Stack, Typography } from "@mui/material";
import { contactStyles } from "./ContactUs.style";
import Form from "../../components/organisms/Form/Form.component";
import { contactFormFields } from "./data/contact";
import { NavLink } from "react-router-dom";
export const ContactUs = () => {
  return (
    <>
      <Stack component="article" sx={contactStyles.banner}>
        <Typography
          component="h2"
          sx={{ ...contactStyles.bannerText, ...contactStyles.bannerTitle }}
        >
          iMT Industrial Solution
        </Typography>
        <Divider
          color="white"
          sx={{ ...contactStyles.divider, color: "#fff" }}
        ></Divider>
        <Typography
          component="h2"
          sx={{ ...contactStyles.bannerText, ...contactStyles.bannerSubtitle }}
        >
          Contact iMT
        </Typography>
      </Stack>
      <Stack component="section" sx={contactStyles.address}>
        <Box component="ul" sx={contactStyles.addressList}>
          <Typography component="li" sx={contactStyles.addressText}>
            Ismailiya - Public Free Zone
          </Typography>
          <Typography component="li" sx={contactStyles.addressText}>
            Ismailiya, Egypt
          </Typography>
          <Typography component="li" sx={contactStyles.addressText}>
            Email:
            <NavLink
              to={"mailto:info@i-mtec.com"}
              style={{ color: "var(--secondary-color)", marginLeft: "5px" }}
            >
              info@i-mtec.com
            </NavLink>
          </Typography>
        </Box>
      </Stack>
      <Stack component="section"></Stack>
      <Divider sx={contactStyles.divider}></Divider>
      <Stack component="section" sx={contactStyles.formSection}>
        <Form formControllers={contactFormFields}></Form>
      </Stack>
    </>
  );
};
