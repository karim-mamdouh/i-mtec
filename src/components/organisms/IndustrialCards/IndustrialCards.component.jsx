import { Box, Button, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { industrialCardStyle } from "./IndustrialCards.style";

const IndustrialCard = ({ image, title, subtitle }) => {
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
      <Typography component="h6" sx={industrialCardStyle.title}>
        {title}
      </Typography>
      <Typography component="p" sx={industrialCardStyle.subtitle}>
        {subtitle}
      </Typography>
      <Button variant="fill" sx={industrialCardStyle.button}>
        Read More
      </Button>
    </Stack>
  );
};

IndustrialCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default IndustrialCard;
