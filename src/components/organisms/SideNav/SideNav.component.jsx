//MUI
import { Box, Drawer, Stack, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
//React
import { NavLink } from "react-router-dom";
import { useState } from "react";
//Styles
import { sideNavStyles } from "./SideNav.style";
//Data
import { sideNavLinks } from "../../../common/routes/ListOfRoutes";
import { mediaLinks } from "./data/mediaLinks";

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack sx={sideNavStyles.sideNavContainer}>
      <MenuOutlinedIcon sx={sideNavStyles.barsIcon} onClick={toggleDrawer} />
      {/* Sidenav */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Stack component="aside" sx={sideNavStyles.drawerContainer}>
          {/* Routes */}
          <Stack component="ul" sx={sideNavStyles.drawerList}>
            {sideNavLinks.map((link) => (
              <Box
                component="li"
                key={link.title}
                sx={sideNavStyles.drawerListItem}
              >
                <NavLink
                  to={link.path}
                  style={sideNavStyles.drawerLink}
                  onClick={toggleDrawer}
                >
                  {link.title}
                </NavLink>
              </Box>
            ))}
          </Stack>
          {/* Social media links */}
          <Stack sx={sideNavStyles.socialMediaContainer}>
            {mediaLinks.map((link, index) => (
              <Typography
                component="a"
                href={link.link}
                target="_blank"
                sx={sideNavStyles.socialLink}
                key={index}
              >
                {link.icon}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Stack>
  );
};
