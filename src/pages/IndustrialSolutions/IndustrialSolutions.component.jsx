import React from "react";
import { Banner } from "../../components/atoms";
import { Box, Stack, Typography } from "@mui/material";
import { industrialSolutionsStyles } from "./IndustrialSolutions.style";
import { solutions } from "./data/solutions";

const IndustrialSolutions = () => {
  return (
    <>
      <Banner title="iMT Industrial Solutions" />
      <Stack component="section" sx={industrialSolutionsStyles.pageContainer}>
        {solutions.map((card, index) => (
          <div id={card.id} key={card.id}>
            <Stack sx={industrialSolutionsStyles.container}>
              <Stack
                sx={{
                  ...industrialSolutionsStyles.textContainer,
                  backgroundColor:
                    index === 1 ? "rgba(210, 27, 49, 0.9)" : "rgba(0,0,0, 0.9)",
                }}
              >
                <Typography variant="h3" component="h3">
                  {card.title}
                </Typography>
                <Typography variant="p" component="p">
                  {card.subtitle}
                </Typography>
              </Stack>
              <Box component="figure" sx={industrialSolutionsStyles.figure}>
                <Box
                  sx={industrialSolutionsStyles.image}
                  component="img"
                  src={card.image}
                  alt="industrial-card-img"
                ></Box>
              </Box>
            </Stack>
          </div>
        ))}
      </Stack>
    </>
  );
};

export default IndustrialSolutions;
