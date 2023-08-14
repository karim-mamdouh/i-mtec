import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createMediaLink } from "../../../../utilities/factories";

export const mediaLinks = [
  createMediaLink("https://www.facebook.com/", <FacebookIcon />),
  createMediaLink("https://www.instagram.com/", <InstagramIcon />),
  createMediaLink("https://www.youtube.com/", <YouTubeIcon />),
  createMediaLink("https://www.linkedin.com/", <LinkedInIcon />),
  createMediaLink("https://www.twitter.com/", <TwitterIcon />),
];
