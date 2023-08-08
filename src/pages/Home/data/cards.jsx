import {
  heroImages,
  industrialImages,
  qualityImages,
} from "../../../common/images";
import {
  createHeroCard,
  createIndustrialCard,
  createMissionCard,
} from "../../../utilities/factories";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createMediaLink } from "../../../utilities/factories";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const cards = [
  createHeroCard(heroImages.card1, "Sensing Technology"),
  createHeroCard(heroImages.card2, "Power Distribution"),
  createHeroCard(heroImages.card3, "Contract Manufacturing"),
];

export const industrialCards = [
  createIndustrialCard(
    industrialImages.industrial1,
    "Power Distribution Systems",
    "With an average of 15 years of experience per team member in the EV and power distribution technology field, iMT's expertise in busbars is unparalleled",
    "power"
  ),
  createIndustrialCard(
    industrialImages.industrial2,
    "Sensing Technologies",
    "iMT's core offering is based on a unique, in-house developed proprietary technology that produces high-quality, cost-efficient products for the growing sensors industry",
    "sensing"
  ),
  createIndustrialCard(
    industrialImages.industrial3,
    "Contract Manufacturing",
    "iMT leverages its specialized knowledge and streamlined operations to offer competitive, build-to-print device solutions in contract manufacturing",
    "contract"
  ),
];

export const missionSectionCards = [
  createMissionCard(qualityImages.mission, "Mission", "/mission"),
  createMissionCard(qualityImages.vision, "Vision", "/vision"),
  createMissionCard(qualityImages.quality, "Quality Policy", "/quality"),
];

export const mediaLinks = [
  createMediaLink(
    "https://www.facebook.com/",
    <FacebookIcon sx={{ fontSize: "2rem" }} />
  ),
  createMediaLink(
    "https://www.instagram.com/",
    <InstagramIcon sx={{ fontSize: "2rem" }} />
  ),
  createMediaLink(
    "https://www.youtube.com/",
    <YouTubeIcon sx={{ fontSize: "2rem" }} />
  ),
  createMediaLink(
    "https://www.linkedin.com/",
    <LinkedInIcon sx={{ fontSize: "2rem" }} />
  ),
  createMediaLink(
    "https://www.twitter.com/",
    <TwitterIcon sx={{ fontSize: "2rem" }} />
  ),
];
