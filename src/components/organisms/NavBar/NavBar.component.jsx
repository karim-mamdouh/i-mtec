import { Box, Stack, Typography } from "@mui/material";
import logo from "../../../assets/images/logo.webp";
import React from "react";
import { navBarStyles } from "./NavBar.style";
import { NavLink } from "react-router-dom";
import { createNavLink } from "../../../utilities/factories";
import useWindowResize from "../../../utilities/hooks/useWindowResize";
import Heighlights from "../Heighlights/Heighlights.component";
import SideNav from "../SideNav/SideNav.component";

const navLinks = [
  createNavLink("Home", "/"),
  createNavLink("About", "/about"),
  createNavLink("Contact Us", "/contact-us"),
];

const NavBar = () => {
  const windowWidth = useWindowResize();

  const getActiveLinkColor = ({ isActive }) =>
    isActive ? navBarStyles.activeLink : navBarStyles.link;

  return (
    <Box component="nav" sx={navBarStyles.nav}>
      <Stack sx={navBarStyles.container}>
        {/* Logo */}
        <NavLink
          to="/"
          style={{
            ...navBarStyles.logoContainer,
            width: navBarStyles.logoContainer.width(windowWidth),
          }}
        >
          <Box component="figure" sx={navBarStyles.figure}>
            <Box
              component="img"
              src={logo}
              alt="i-mtec logo"
              sx={navBarStyles.logo}
            />
          </Box>
        </NavLink>

        {/* Title */}
        {windowWidth >= 768 && (
          <Stack sx={navBarStyles.title}>
            <Typography variant="h1">
              iNNOVATiVE MANUFACTURiNG TECHNOLOGiES
            </Typography>
          </Stack>
        )}

        {/* Nav links */}
        {windowWidth >= 768 ? (
          <Stack component="ul" sx={navBarStyles.linksList}>
            {navLinks.map((link, index) => (
              <Stack component="li" key={index}>
                <NavLink to={link.path} style={getActiveLinkColor}>
                  {link.title}
                </NavLink>
              </Stack>
            ))}
          </Stack>
        ) : (
          <SideNav />
        )}
      </Stack>
      <Heighlights />
      <Box sx={navBarStyles.bannerContainer}>
        <Typography
          component="h2"
          sx={{ ...navBarStyles.bannerText, ...navBarStyles.bannerTitle }}
        >
          iMT Industrial Solution
        </Typography>
      </Box>
    </Box>
  );
};

export default NavBar;
