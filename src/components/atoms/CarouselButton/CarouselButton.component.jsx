import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { carouselButtonStyles } from "./CarouselButton.style";

export const CarouselButton = ({ onClick, className, style, next, prev }) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      style={{ ...style, ...carouselButtonStyles.button }}
    >
      {next && <ArrowForwardIosIcon fontSize="sm" />}
      {prev && <ArrowBackIosNewIcon fontSize="sm" />}
    </Button>
  );
};
