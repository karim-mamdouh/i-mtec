//MUI
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
//Styles
import { carouselButtonStyles } from "./CarouselButton.style";
//React
import PropTypes from "prop-types";

export const CarouselButton = ({ onClick, className, style, next, prev }) => (
  <Button
    onClick={onClick}
    className={className}
    style={{ ...style, ...carouselButtonStyles.button }}
  >
    {/* Next icon */}
    {next && <ArrowForwardIosIcon fontSize="sm" />}
    {/* Previous icon */}
    {prev && <ArrowBackIosNewIcon fontSize="sm" />}
  </Button>
);

CarouselButton.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  next: PropTypes.bool,
  prev: PropTypes.bool,
};
