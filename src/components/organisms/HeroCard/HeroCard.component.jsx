import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { heroCardStyles } from "./HeroCard.style";

const HeroCard = ({ image, title }) => {
  return (
    <Box
      component="div"
      sx={{
        ...heroCardStyles.card,
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box component="section" sx={heroCardStyles.overlay}></Box>
      {/* <Box component="figure" sx={heroCardStyles.cardImgContainer}>
        <Box
          component="img"
          src={image}
          alt="news-image"
          sx={heroCardStyles.cardImg}
        ></Box>
      </Box> */}
      <Stack component="div" sx={heroCardStyles.cardContent}>
        <Typography component="h3" variant="h3" sx={heroCardStyles.title}>
          {title}
        </Typography>
        {/* <Typography component="p" sx={heroCardStyles.subtitle}>
          {subtitle}
        </Typography> */}
        <Button sx={heroCardStyles.button} variant="fill">
          Read More
        </Button>
      </Stack>
    </Box>
  );
};

HeroCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroCard;
