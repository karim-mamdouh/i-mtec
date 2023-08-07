import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { footerStyle } from "./Footer.style";
import SearchForm from "../../molecules/Search/SearchForm.component";
import { mediaLinks } from "../SideNav/SideNav.component";

const Footer = () => {
  const footerLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Industrial Solutions",
      path: "/industrial-solutions",
    },
    {
      name: "Mission",
      path: "/mission",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
    {
      name: "Vision",
      path: "/vision",
    },
    {
      name: "Career",
      path: "/career",
    },
    // {
    //   name: "About",
    //   path: "/about",
    // },

    {
      name: "Quality Policy",
      path: "/quality",
    },
  ];
  return (
    <>
      <Stack
        component="footer"
        sx={{
          backgroundColor: "secondary.main",
          color: "text.main",
          padding: "0 1rem",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            margin: "auto",
            paddingTop: "50px",
            // marginBottom: "100px",
          }}
        >
          {/* <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: "25px",
            alignItems: { xs: "start", md: "center" },
          }}
        >
          <Typography variant="p" fontSize={"22px"} marginTop={"22px"}>
            Subscribe to Receive Our Latest Tech News
          </Typography>
          <SearchForm />
        </Stack>
        <Divider color="white" sx={{ color: "#fff", width: "100%" }} /> */}
          <Stack
            rowGap={"30px"}
            gap="30px"
            flexDirection={{ xs: "column", lg: "row" }}
            // marginTop="90px"
            justifyContent={"space-between"}
          >
            {/* Logo */}
            <Stack sx={footerStyle.block}>
              <NavLink
                to="/"
                style={{
                  ...footerStyle.logo,
                }}
              >
                <Box
                  component="figure"
                  backgroundColor="#fff"
                  sx={{ width: { xs: "100%", md: "35%" } }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="i-mtec logo"
                    sx={{ maxWidth: "100%" }}
                  />
                </Box>
                <Box sx={{ width: { xs: "100%", md: "65%" } }}>
                  <Typography style={{ ...footerStyle.title }}>iMT</Typography>
                  <Typography>Innovative Manufacturing Technologies</Typography>
                </Box>
              </NavLink>
              {/* <Divider
              color="white"
              sx={{
                color: "#fff",
                marginTop: "15px",
                width: { xs: "auto", sm: "400px" },
              }}
            />
            <Stack gap={"10px"}>
              <NavLink
                to="/about"
                style={{
                  fontSize: "22px",
                  marginTop: "26px",
                  fontWeight: 600,
                  color: "white",
                  width: "fit-content",
                }}
              >
                <Typography variant="p" component="p">
                  About Us
                </Typography>
              </NavLink>
               <Typography variant="h4" sx={footerStyle.desc}>
                I'm a paragraph. Click here to add your own text and edit me.
                I'm a great place for you to tell a story and let your users
                know a little more about you.
              </Typography> 
            </Stack> */}
            </Stack>
            <Stack
              sx={{
                gap: "1rem",
                ...footerStyle.block,
                flexDirection: { xs: "column", xxl: "row" },
                gap: "1rem",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h6">
                  Subscribe to our best news letters
                </Typography>
                <Stack sx={{ flexDirection: "row", marginTop: "1rem" }}>
                  <TextField
                    variant="outlined"
                    label="Enter Email Address"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      flexGrow: 1,
                      "& .MuiInputBase-input": {
                        // paddingY: "0",
                        color: "#000",
                        outline: "none",
                        border: "none",
                      },
                    }}
                  />
                  <Button variant="footer">SUBSCRIBE</Button>
                </Stack>
              </Box>
              <Stack
                sx={{
                  ...footerStyle.socialMediaContainer,
                  marginTop: { xs: "auto", xxl: "4rem" },
                  marginBottom: "1rem",
                }}
              >
                {mediaLinks.map((link, index) => (
                  <Typography
                    component="a"
                    href={link.link}
                    target="_blank"
                    sx={footerStyle.socialLink}
                    key={index}
                  >
                    {link.icon}
                  </Typography>
                ))}
              </Stack>
            </Stack>
            <Stack
              gap={"10px"}
              sx={{ ...footerStyle.linksContainer, ...footerStyle.block }}
            >
              <Stack sx={footerStyle.linksBox}>
                {footerLinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    style={{
                      ...footerStyle.link,
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider></Divider>
      <Box sx={{ backgroundColor: "black" }}>
        <Typography
          component="p"
          variant="p"
          sx={{
            width: "33%",
            margin: "0 0 0 auto",
            color: "white",
            padding: "0.5rem 0",
          }}
        >
          &copy; {new Date().getFullYear()} by iMT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
