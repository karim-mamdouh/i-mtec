import { qualityImages } from "../../../common/images";
import { createPolicy } from "../../../utilities/factories";

export const policies = {
  misson: createPolicy(
    "Our Mission: Your Success!",
    [
      '"Our mission at iMT is to drive business solutions that help customers increase efficiency, reduce costs, promote sustainability, and create value for their stakeholders. Our aim is to deliver measurable results that help our customers achieve their objectives and strong returns for our investors"',
    ],
    qualityImages.mission
  ),
  vision: createPolicy(
    "Your Vision, Our Expertise, Exceptional Results",
    [
      '"Our vision at iMT is to be the preferred partner for our customers and a global leader in providing innovative, sustainable, and customer-centric solutions in the fields of contactless sensors and power products. We are committed to fostering a culture of innovation and creating a sustainable future for our customers, employees, and communities."',
    ],
    qualityImages.vision
  ),
  quality: createPolicy(
    "Quality is not just a goal, it's a way of life",
    [
      "At iMT, our commitment to quality is at the forefront of everything we do. Our goal is to consistently deliver products that meet or exceed our customer's expectations, on time and with exceptional service.",
      "We are dedicated to maintaining a Quality Management System that is aligned with ISO 9001, IATF16949, and other applicable industry standards such as Tisax, ISO14001, ISO45001, and VDA 6.3. Continuous Improvement is at the heart of our business, and we are continually striving to improve our processes, products, and services. ",
      "We are committed to providing our employees with the necessary training and resources to ensure that they are qualified to perform their duties to the highest standards. Our employees are encouraged to take ownership of their work and to contribute to the continuous improvement of our processes.",
      "Our commitment to quality extends beyond our products and services. We are committed to operating in an environmentally responsible and sustainable manner, minimizing our impact on the environment and complying with all applicable regulations and laws.",
      "We believe that our commitment to quality will result in customer satisfaction, and we are committed to fostering long-lasting relationships with our customers based on trust, integrity, and mutual respect.",
    ],
    qualityImages.quality
  ),
};
