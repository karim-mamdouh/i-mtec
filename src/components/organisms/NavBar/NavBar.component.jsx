import { Box, Stack } from "@mui/material";
import logo from "../../../assets/images/logo.webp";
import React from "react";
import { navBarStyles } from "./NavBar.style";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box component="nav">
      <Stack sx={navBarStyles.container}>
        {/* Logo */}
        <NavLink to="/" style={navBarStyles.logoContainer}>
          <Box component="figure">
            <Box
              component="img"
              src={logo}
              alt="i-mtec logo"
              sx={navBarStyles.logo}
            ></Box>
          </Box>
        </NavLink>
        <p style={navBarStyles.title}>iNNOVATiVE MANUFACTURiNG TECHNOLOGiES</p>
        {/* Nav links */}
        <Stack component="ul" sx={navBarStyles.linksList}>
          <Box component="li">
            <NavLink to="/">Home</NavLink>
          </Box>
          <Box component="li">
            <NavLink to="/about">About</NavLink>
          </Box>
          <Box component="li">
            <NavLink to="/contact-us">Contact Us</NavLink>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavBar;
