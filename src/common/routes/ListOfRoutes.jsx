import {
  About,
  Career,
  ContactUs,
  Home,
  IndustrialSolutions,
  Policy,
} from "../../pages";
import { Home2 } from "../../pages/Home2/Home.component";
import { createAppRoute, createNavLink } from "../../utilities/factories";

export const appRoutes = [
  createAppRoute("/", <Home />),
  createAppRoute("/about", <About />),
  // createAppRoute("/home2", <Home2 />),
  createAppRoute("/contact-us", <ContactUs />),
  createAppRoute("/vision", <Policy />),
  createAppRoute("/mission", <Policy />),
  createAppRoute("/quality", <Policy />),
  createAppRoute("/industrial-solutions", <IndustrialSolutions />),
  createAppRoute("/career", <Career />),
];

export const navLinks = [
  createNavLink("Home", "/"),
  createNavLink("Solutions", "/industrial-solutions"),
  createNavLink("Career", "/career"),
  createNavLink("About", "/about"),
  createNavLink("Contact", "/contact-us"),
];

export const footerLinks = [
  createNavLink("Home", "/"),
  createNavLink("About", "/about"),
  createNavLink("Solutions", "/industrial-solutions"),
  createNavLink("Mission", "/mission"),
  createNavLink("Contact", "/contact-us"),
  createNavLink("Vision", "/vision"),
  createNavLink("Career", "/career"),
  createNavLink("Quality Policy", "/quality"),
];

export const sideNavLinks = [
  createNavLink("Home", "/"),
  createNavLink("Solutions", "/industrial-solutions"),
  createNavLink("Career", "/career"),
  createNavLink("About", "/about"),
  createNavLink("Mission", "/mission"),
  createNavLink("Vision", "/vision"),
  createNavLink("Quality Policy", "/quality"),
  createNavLink("Contact", "/contact-us"),
];
