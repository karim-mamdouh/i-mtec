//MUI
import { Box, Typography } from "@mui/material";
//Styles
import { bannerStyles } from "./Banner.style";
//React
import PropTypes from "prop-types";

export const Banner = ({ title, sx }) => (
  <Box sx={{ ...bannerStyles.bannerContainer, ...sx }}>
    {/* Title */}
    <Typography component="h2" variant="h2" sx={bannerStyles.bannerText}>
      {title}
    </Typography>
  </Box>
);

Banner.propTypes = {
  title: PropTypes.string,
  sx: PropTypes.object,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
