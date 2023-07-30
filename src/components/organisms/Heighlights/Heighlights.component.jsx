import { Stack, Typography } from "@mui/material";
import React from "react";
import { heighlights } from "./Heiglights.style";
import Carousel from "react-material-ui-carousel";
import CarouselButton from "../../atoms/CarouselButton/CarouselButton.component";

const heiglightData = [
  "Are you running out of floor space for projects you need to build?",
  "Do you need sub-assemblies for a larger project but don't have the capacity to manufacture them on your floor?",
  "Would you like to have your people focused on higher value add projects?",
];

const Heighlights = () => {
  return (
    <Stack sx={heighlights.header}>
      <Typography component="h2" sx={heighlights.headerTitle}>
        Highlights:
      </Typography>
      <Stack sx={heighlights.headerCarousel}>
        <Carousel
          navButtonsAlwaysVisible={true}
          sx={{ width: "100%", flexDirection: "row", display: "flex" }}
          indicators={false}
          swipe={true}
          NavButton={({ onClick, className, style, next, prev }) => (
            <CarouselButton
              onClick={onClick}
              className={className}
              style={style}
              next={next}
              prev={prev}
            />
          )}
          animation="slide"
        >
          {heiglightData.map((item, index) => (
            <Typography component="p" key={index} sx={heighlights.carouselItem}>
              {item}
            </Typography>
          ))}
        </Carousel>
      </Stack>
    </Stack>
  );
};

export default Heighlights;
