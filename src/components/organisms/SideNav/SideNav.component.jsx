import { Box, Drawer, Stack, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React, { useState } from "react";
import { sideNavStyles } from "./SideNav.style";
import { NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { createMediaLink } from "../../../utilities/factories";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { sideNavLinks } from "../../../common/routes/ListOfRoutes";

export const mediaLinks = [
  createMediaLink("https://www.facebook.com/", <FacebookIcon />),
  createMediaLink("https://www.instagram.com/", <InstagramIcon />),
  createMediaLink("https://www.youtube.com/", <YouTubeIcon />),
  createMediaLink("https://www.linkedin.com/", <LinkedInIcon />),
  createMediaLink("https://www.twitter.com/", <TwitterIcon />),
];

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack sx={sideNavStyles.sideNavContainer}>
      <MenuOutlinedIcon sx={sideNavStyles.barsIcon} onClick={toggleDrawer} />
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
        <Stack component="aside" sx={sideNavStyles.drawerContainer}>
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
