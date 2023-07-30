import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import SearchForm from "../../molecules/Search/SearchForm";
import logo from "../../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";
import { footerStyle } from "./Footer.style";

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
    // {
    //   name: "Portfolio",
    //   path: "/",
    // },
    {
      name: "Contact",
      path: "/contact-us",
    },
    // {
    //   name: "Innovation",
    //   path: "/",
    // },
    // {
    //   name: "FQA",
    //   path: "/",
    // },
  ];
  return (
    <Stack
      component="footer"
      sx={{
        backgroundColor: "secondary.main",
        color: "text.main",
      }}
    >
      <Stack
        sx={{
          width: "85%",
          margin: "auto",
          paddingTop: "50px",
          marginBottom: "100px",
        }}
      >
        <Stack
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
        <Divider color="white" sx={{ color: "#fff", width: "100%" }} />
        <Stack
          rowGap={"30px"}
          flexDirection={{ xs: "column", md: "row" }}
          marginTop="90px"
          justifyContent={"space-between"}
        >
          {/* Logo */}
          <Stack>
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
              <Box alignSelf={"end"} sx={{ width: { xs: "100%", md: "65%" } }}>
                <Typography style={{ ...footerStyle.title }}>iMT</Typography>
                <Typography>Innovative Manufacturing Technologies</Typography>
              </Box>
            </NavLink>
            <Divider
              color="white"
              sx={{
                color: "#fff",
                marginTop: "15px",
                width: { xs: "auto", sm: "400px" },
              }}
            />
            <Stack gap={"10px"}>
              <Typography
                variant="p"
                sx={{ fontSize: "22px", marginTop: "26px", fontWeight: 600 }}
              >
                About Us
              </Typography>
              <Typography variant="h4" sx={footerStyle.desc}>
                I'm a paragraph. Click here to add your own text and edit me.
                I'm a great place for you to tell a story and let your users
                know a little more about you.
              </Typography>
            </Stack>
          </Stack>
          <Stack gap={"10px"} sx={footerStyle.linksContainer}>
            <Box xs={footerStyle.linksBox}>
              {footerLinks.map(
                (link, index) =>
                  footerLinks.indexOf(link) < 4 && (
                    <NavLink
                      key={index}
                      to={link.path}
                      style={{
                        ...footerStyle.link,
                      }}
                    >
                      {link.name}
                    </NavLink>
                  )
              )}
            </Box>
            <Box xs={footerLinks.linksBox}>
              {footerLinks.map(
                (link, index) =>
                  footerLinks.indexOf(link) >= 4 && (
                    <NavLink
                      key={index}
                      to={link.path}
                      style={{
                        ...footerStyle.link,
                      }}
                    >
                      {link.name}
                    </NavLink>
                  )
              )}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
