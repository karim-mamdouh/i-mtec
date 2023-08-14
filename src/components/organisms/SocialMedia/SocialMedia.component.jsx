import { Stack, Typography } from "@mui/material";
import React from "react";
import { socialMediaStyles } from "./SocialMedia.style";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createMediaLink } from "../../../utilities/factories";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

const mediaLinks = [
  createMediaLink(
    "https://www.facebook.com/",
    <FacebookIcon sx={{ fontSize: "1.25rem" }} />
  ),
  createMediaLink(
    "https://www.instagram.com/",
    <InstagramIcon sx={{ fontSize: "1.25rem" }} />
  ),
  createMediaLink(
    "https://www.youtube.com/",
    <YouTubeIcon sx={{ fontSize: "1.25rem" }} />
  ),
  createMediaLink(
    "https://www.linkedin.com/",
    <LinkedInIcon sx={{ fontSize: "1.25rem" }} />
  ),
  createMediaLink(
    "https://www.twitter.com/",
    <TwitterIcon sx={{ fontSize: "1.25rem" }} />
  ),
];

export const SocialMedia = () => {
  return (
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
};
