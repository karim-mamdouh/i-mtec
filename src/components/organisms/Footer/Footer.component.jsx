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
import { footerLinks } from "../../../common/routes/ListOfRoutes";

export const Footer = () => {
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
            paddingTop: "30px",
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
            alignItems="flex-end"
          >
            {/* Logo */}
            <Stack sx={{ ...footerStyle.block, marginBottom: "1rem" }}>
              <NavLink
                to="/"
                style={{
                  ...footerStyle.logo,
                }}
              >
                <Stack
                  component="figure"
                  backgroundColor="#fff"
                  sx={{
                    width: { xs: "100%", md: "35%" },
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    component="img"
                    src={logo}
                    alt="i-mtec logo"
                    sx={{ maxWidth: "100%" }}
                  />
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "65%" } }}>
                  <Stack sx={{ flexGrow: 1, justifyContent: "center" }}>
                    <Typography style={{ ...footerStyle.title }}>
                      iMT
                    </Typography>
                  </Stack>
                  <Typography>Innovative Manufacturing Technologies</Typography>
                </Stack>
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
                marginBottom: "1rem",
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="h6">
                  Subscribe to our best news letters
                </Typography>
                <Stack sx={{ flexDirection: "row", marginTop: "1rem" }}>
                  <TextField
                    variant="outlined"
                    placeholder="Enter Email Address"
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      flexGrow: 1,
                      "&:focus-within fieldset, &:focus-visible fieldset": {
                        border: "none !important",
                        borderRadius: "10px",
                      },
                      "& .MuiOutlinedInput-root": {
                        border: "none",
                      },
                      "& .MuiInputBase-root": {
                        border: "none",
                      },
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
              {/* <Stack
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
              </Stack> */}
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
                    {link.title}
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
            width: "fit-content",
            margin: "0 1rem 0 auto",
            color: "white",
            padding: "0.5rem 0",
          }}
        >
          Copyright &copy; {new Date().getFullYear()} iMT. &nbsp; All rights
          reserved.
        </Typography>
      </Box>
    </>
  );
};
