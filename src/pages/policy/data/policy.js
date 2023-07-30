import { createPolicy } from "../../../utilities/factories";
import misson from "../../../assets/images/img8.webp";
import vision from "../../../assets/images/img9.webp";
import quality from "../../../assets/images/img10.webp";

export const policies = {
  misson: createPolicy(
    [
      "“Our mission is to leverage the latest innovative technologies and the expertise of our team to drive business solutions that help our customers increase efficiency, reduce costs, promote sustainability, and create value for their stakeholders”.",
      "We aim to stay at the forefront of technological innovation, delivering exceptional customer service, building long-term partnerships, and developing customized solutions that are tailored to the customer’s unique needs and deliver measurable results.",
      "We are committed to financial discipline, transparency, and accountability, and we strive to create long-term value for all our investors and stakeholders, providing a strong return on investment while building a sustainable and socially responsible business.",
      "We strive to continuously grow our business globally by consistently exceeding expectations of our:",
    ],
    misson
  ),
  vision: createPolicy(
    [
      "Our vision at innovative manufacturing technologies to our customers is to be a trusted partner, providing them with innovative solutions that help them achieve their business goals, optimize their operations, reduce costs, and improve their environmental footprint, while delivering strong returns to our investors.",
      "We aim to generate consistent revenue growth, maximize profitability, and manage risk effectively, while maintaining a strong balance sheet. We strongly believe that by providing solutions that help our customers stay competitive, we can create long-term value for our investors.",
      "We are committed to financial discipline, transparency, and accountability, and we strive to create long-term value for all our investors and stakeholders, providing a strong return on investment while building a sustainable and socially responsible business.",
    ],
    vision
  ),
  quality: createPolicy(
    [
      "Innovative Manufacturing Technologies is driven and dedicated to meet customer satisfaction by providing products on-time with the highest quality standard at a reasonable price through employees’ commitment and continuous improvement aligned with Quality Management System",
      "We are committed to financial discipline, transparency, and accountability, and we strive to create long-term value for all our investors and stakeholders, providing a strong return on investment while building a sustainable and socially responsible business.",
    ],
    quality
  ),
};
