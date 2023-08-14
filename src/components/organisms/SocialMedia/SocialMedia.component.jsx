//MUI
import { Stack, Typography } from "@mui/material";
//Styles
import { socialMediaStyles } from "./SocialMedia.style";
//Data
import { mediaLinks } from "./data/mediaLinks";

export const SocialMedia = () => (
  <Stack sx={socialMediaStyles.container}>
    {mediaLinks.map((link, index) => (
      <Typography
        component="a"
        href={link.link}
        target="_blank"
        sx={socialMediaStyles.socialLink}
        key={index}
      >
        {link.icon}
      </Typography>
    ))}
  </Stack>
);
