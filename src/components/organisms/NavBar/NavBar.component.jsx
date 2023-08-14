import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { navBarStyles } from "./NavBar.style";
import { NavLink } from "react-router-dom";
import useWindowResize from "../../../utilities/hooks/useWindowResize";
import Heighlights from "../Heighlights/Heighlights.component";
import SideNav from "../SideNav/SideNav.component";
import { sharedImages } from "../../../common/images/sharedImages";
import { navLinks } from "../../../common/routes/ListOfRoutes";

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
              src={sharedImages.logo}
              alt="i-mtec logo"
              sx={navBarStyles.logo}
            />
          </Box>
        </NavLink>

        {/* Title */}
        {true && (
          <Stack sx={navBarStyles.title}>
            <Typography
              variant="h1"
              component="h1"
              sx={{ fontSize: { xs: "1rem", sm: "1.25rem" } }}
            >
              iNNOVATiVE MANUFACTURiNG TECHNOLOGiES
            </Typography>
          </Stack>
        )}

        {/* Nav links */}
        {windowWidth >= 768 ? (
          <Stack component="ul" sx={navBarStyles.linksList}>
            {navLinks.map((link, index) => (
              <Stack
                component="li"
                key={index}
                sx={{ fontFamily: "Lato", fontWeight: 300 }}
              >
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
    </Box>
  );
};

export default NavBar;
