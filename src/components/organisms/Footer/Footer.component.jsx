import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import SearchForm from "../../molecules/Search/SearchForm";
import logo from "../../../assets/images/logo.webp";
import { NavLink } from "react-router-dom";

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
      name: "Portfolio",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
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
            // marginY: "50px",
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
        <Divider color="white" sx={{ color: "#fff" }} />
        <Stack
          rowGap={"30px"}
          flexDirection={{ xs: "column", md: "row" }}
          marginTop="70px"
          justifyContent={"space-between"}
        >
          {/* Logo */}
          <NavLink
            to="/"
            style={{
              borderRight: "1px solid black",
              display: "flex",
              gap: "10px",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <Box
              component="figure"
              backgroundColor="#fff"
              sx={{ width: "35%" }}
            >
              <Box
                component="img"
                src={logo}
                alt="i-mtec logo"
                sx={{ maxWidth: "100%" }}
              />
            </Box>
            <Box alignSelf={"end"}>
              <Typography>iMT</Typography>
              <Typography>Innovative Manufacturing Technologies</Typography>
            </Box>
          </NavLink>
          <Stack gap={"10px"}>
            {footerLinks.map((link) => (
              <NavLink to={link.path} style={{ color: "#fff" }}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Stack>
        <Divider
          color="white"
          sx={{ color: "#fff", marginTop: "15px", width: "400px" }}
        />
        <Stack gap={"10px"}>
          <Typography
            variant="p"
            sx={{ fontSize: "22px", marginTop: "26px", fontWeight: 600 }}
          >
            About Us
          </Typography>
          <Typography variant="h4" fontSize={"16px"} width="360px">
            I'm a paragraph. Click here to add your own text and edit me. I’m a
            great place for you to tell a story and let your users know a little
            more about you.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
