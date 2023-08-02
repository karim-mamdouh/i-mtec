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

export const cards = [
  createHeroCard(heroImages.card1, "Sensing Technology"),
  createHeroCard(heroImages.card2, "Power Distribution"),
  createHeroCard(heroImages.card3, "Contract Manufacturing"),
];

export const industrialCards = [
  createIndustrialCard(
    industrialImages.industrial1,
    "Power Distribution Systems",
    "With an average of 15 years of experience per team member in the EV and power distribution technology field, iMT's expertise in busbars is unparalleled"
  ),
  createIndustrialCard(
    industrialImages.industrial2,
    "Sensing Technologies",
    "With an average of 15 years of experience per team member in the EV and power distribution technology field, iMT's expertise in busbars is unparalleled"
  ),
  createIndustrialCard(
    industrialImages.industrial3,
    "Contract Manufacturing",
    "iMT leverages its specialized knowledge and streamlined operations to offer competitive, build-to-print device solutions in contract manufacturing"
  ),
];

export const missionSectionCards = [
  createMissionCard(qualityImages.mission, "Mission", "/mission"),
  createMissionCard(qualityImages.vision, "Vision", "/vision"),
  createMissionCard(qualityImages.quality, "Quality Policy", "/quality"),
];
