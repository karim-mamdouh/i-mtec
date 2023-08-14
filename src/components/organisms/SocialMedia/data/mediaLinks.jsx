import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { createMediaLink } from "../../../../utilities/factories";

export const mediaLinks = [
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
