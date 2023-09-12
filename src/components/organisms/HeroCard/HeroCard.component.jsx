//MUI
import { Box, Button, Stack, Typography } from "@mui/material";
//React
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";
//Styles
import { heroCardStyles } from "./HeroCard.style";

export const HeroCard = ({ image, title, route }) => {
  const cardId = `/industrial-solutions/#${route}`;

  return (
    <Box component="div" sx={heroCardStyles.card}>
      {/* Dimmed background */}
      <Box component="section" sx={heroCardStyles.overlay}></Box>
      {/* Image */}
      <Box component="figure" sx={heroCardStyles.cardImgContainer}>
        <Box
          component="img"
          src={image}
          alt="news-image"
          sx={heroCardStyles.cardImg}
        ></Box>
      </Box>
      {/* Title */}
      <Stack component="div" sx={heroCardStyles.cardContent}>
        <Typography component="h3" variant="h3" sx={heroCardStyles.title}>
          {title}
        </Typography>
        {/* <Typography component="p" sx={heroCardStyles.subtitle}>
          {subtitle}
        </Typography> */}
        <Button sx={heroCardStyles.button} variant="fill">
          <HashLink
            to={cardId}
            style={{ textDecoration: "none", color: "white" }}
          >
            Read More
          </HashLink>
        </Button>
      </Stack>
    </Box>
  );
};

HeroCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  route: PropTypes.string,
};
