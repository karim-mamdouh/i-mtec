import { Box, Stack, Typography } from "@mui/material";
import Form from "../../components/organisms/Form/Form.component";
import { aboutStyles } from "./About.style";
import { Informations, formFields } from "./data/about";
import logo from "../../assets/images/logo.webp";
// import useWindowResize from "../../utilities/hooks/useWindowResize";
import React from "react";
import { sharedImages } from "../../common/images/sharedImages";
export const About = () => {
  // const windowWidth = useWindowResize();
  return (
    <>
      <Stack component="article" sx={aboutStyles.banner}>
        <Typography
          component="h2"
          sx={{ ...aboutStyles.bannerText, ...aboutStyles.bannerTitle }}
        >
          About iMT
        </Typography>
      </Stack>
      <Stack component="section" sx={aboutStyles.logoSection}>
        <Box component="figure" sx={aboutStyles.figure}>
          <Box
            component="img"
            src={sharedImages.about}
            alt="i-mtec logo"
            sx={aboutStyles.logo}
          />
        </Box>
      </Stack>
      <Stack component="section" sx={aboutStyles.info}>
        <Box component="ul" sx={aboutStyles.infoList}>
          {Informations.map((point, index) => (
            <Box component="li" key={index} sx={aboutStyles.infoPoint}>
              {point}
            </Box>
          ))}
        </Box>
      </Stack>
      <Stack sx={aboutStyles.formTitleContainer}>
        <Typography component="h4" variant="h4" sx={aboutStyles.formTitle}>
          Become a Partner
        </Typography>
      </Stack>
      <Stack component="section" sx={aboutStyles.formSection}>
        <Form formControllers={formFields}></Form>
        <Box component="figure" sx={aboutStyles.partnerFigure}>
          <Box
            component="img"
            src={sharedImages.aboutMeeting}
            sx={aboutStyles.image}
            alt="meeting"
          ></Box>
        </Box>
      </Stack>
    </>
  );
};
