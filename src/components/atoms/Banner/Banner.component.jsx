import { Box, Typography } from "@mui/material";
import React from "react";
import { bannerStyles } from "./Banner.style";
import PropTypes from "prop-types";

export const Banner = ({ title, sx, fontSize }) => {
  return (
    <Box sx={{ ...bannerStyles.bannerContainer, ...sx }}>
      <Typography
        component="h2"
        variant="h2"
        sx={
          fontSize
            ? { ...bannerStyles.bannerText, fontSize }
            : bannerStyles.bannerText
        }
      >
        {title}
      </Typography>
    </Box>
  );
};

Banner.propTypes = {
  title: PropTypes.string,
  sx: PropTypes.object,
  // fontSize: PropTypes.string,
};
