import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { carouselButtonStyles } from "./CarouselButton.style";

const CarouselButton = ({ onClick, className, style, next, prev }) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      style={{ ...style, ...carouselButtonStyles.button }}
    >
      {next && <ArrowForwardIosIcon />}
      {prev && <ArrowBackIosNewIcon />}
    </Button>
  );
};

export default CarouselButton;
