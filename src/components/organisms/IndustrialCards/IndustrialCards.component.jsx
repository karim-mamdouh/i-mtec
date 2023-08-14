import { Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { industrialCardStyle } from "./IndustrialCards.style";
import { HashLink } from "react-router-hash-link";

export const IndustrialCard = ({ image, title, subtitle, id }) => {
  const cardId = `/industrial-solutions/#${id}`;
  return (
    <Stack sx={industrialCardStyle.card}>
      <Box component="figure" sx={industrialCardStyle.figure}>
        <Box
          component="img"
          src={image}
          alt="industrial-card-img"
          sx={industrialCardStyle.image}
        ></Box>
      </Box>
      <Typography component="h6" variant="h6" sx={industrialCardStyle.title}>
        {title}
      </Typography>
      <Stack sx={{ flexGrow: 1, justifyContent: "space-between" }}>
        <Typography component="p" variant="p" sx={industrialCardStyle.subtitle}>
          {subtitle}
          <Typography component="span" sx={industrialCardStyle.readMore}>
            ...
          </Typography>
        </Typography>
        <Button variant="fill" sx={industrialCardStyle.button}>
          <HashLink
            to={cardId}
            style={{ textDecoration: "none", color: "white" }}
          >
            Read More
          </HashLink>
        </Button>
      </Stack>
    </Stack>
  );
};

IndustrialCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
