//MUI
import { Box, Stack, SvgIcon, Typography } from "@mui/material";
//React
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { missionSectionStyle } from "./Mission.style";
//Styles

export const MissionCard = ({ image, title, link }) => (
  <Stack sx={missionSectionStyle.card}>
    {/* Image */}
    <Box component="figure" sx={missionSectionStyle.figure}>
      <Box
        component="img"
        src={image}
        alt="industrial-card-img"
        sx={missionSectionStyle.image}
      ></Box>
    </Box>
    <NavLink to={link} style={missionSectionStyle.link}>
      {/* Title */}
      <Typography component="h6" sx={missionSectionStyle.title}>
        {title}
      </Typography>

      {/* Arrow icon */}
      <SvgIcon>
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="23 74.673 155.203 56.815"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="23 74.673 155.203 56.815"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path d="M178.203 103.081L129 74.673V101H23v4h106v26.488l49.203-28.407z"></path>
          </g>
        </svg>
      </SvgIcon>
    </NavLink>
  </Stack>
);

MissionCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
