import { createHeroCard } from "../../../utilities/factories";
import card1Img from "../../../assets/images/img1.webp";
import card2Img from "../../../assets/images/img2.webp";
import card3Img from "../../../assets/images/img4.webp";
import card4Img from "../../../assets/images/img5.webp";
import card5Img from "../../../assets/images/img6.webp";
import card6Img from "../../../assets/images/img7.webp";
// Mission Images
import card8Img from "../../../assets/images/img8.webp";
import card9Img from "../../../assets/images/img9.webp";
import card10Img from "../../../assets/images/img10.webp";

export const cards = [
  createHeroCard(
    card1Img,
    "iMT Contract manufacturing service is the solution to help you leverage your resources and take advantage of our decades of experience.",
    "iMT builds it your way."
  ),
  createHeroCard(
    card2Img,
    "iMT Busbar Technology is continually being improved for more performance and reliability",
    "Busbars connect the various electrical components of the vehicle, such as the battery, motor, and power electronics."
  ),
  createHeroCard(
    card3Img,
    "iMT sensor technology plays a critical role in a wide range of applications",
    "iMT sensor technology refers to the various types of sensors used to measure electrical current in a circuit"
  ),
];

export const industrialCards = [
  createHeroCard(
    card4Img,
    "Sensing Technologies",
    "iMT sensor technology plays a critical role in a wide range of applications, providing accurate and reliable measurement of electrical current and enabling precise control and management of electrical systems."
  ),
  createHeroCard(
    card5Img,
    "Power Distribution Systems",
    "iMT is developing new technologies to continually improve their effectiveness and efficiency, and exploring the use of new busbar technologies"
  ),
  createHeroCard(
    card6Img,
    "Contract Manufacturing",
    " iMT, our expertise is in designing and developing robust processes. We understand the steps it takes to bring your idea from concept to execution."
  ),
];
export const missionSectionCards = [
  createHeroCard(card8Img, "Mission", "link 1"),
  createHeroCard(card9Img, "Vision", "link 2"),
  createHeroCard(card10Img, "Quality Policy", "link 3"),
];
