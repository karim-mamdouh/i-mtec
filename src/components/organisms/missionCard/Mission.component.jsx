import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";
import { missionSectionStyle } from "./Mission.style";

const MissionCard = ({ image, title, subtitle }) => {
  return (
    <Stack sx={missionSectionStyle.card}>
      <Box component="figure" sx={missionSectionStyle.figure}>
        <Box
          component="img"
          src={image}
          alt="industrial-card-img"
          sx={missionSectionStyle.image}
        ></Box>
      </Box>
      <NavLink to="/">
        <Typography component="h6" sx={missionSectionStyle.title}>
          {title}
        </Typography>
      </NavLink>
    </Stack>
  );
};
MissionCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default MissionCard;
