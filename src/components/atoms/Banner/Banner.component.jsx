import { Box, Typography } from "@mui/material";
import React from "react";
import { bannerStyles } from "./Banner.style";
import PropTypes from "prop-types";

export const Banner = ({ title }) => {
  return (
    <Box sx={bannerStyles.bannerContainer}>
      <Typography component="h2" variant="h2" sx={bannerStyles.bannerText}>
        {title}
      </Typography>
    </Box>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
};
