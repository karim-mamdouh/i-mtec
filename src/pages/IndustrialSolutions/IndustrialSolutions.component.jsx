import React from "react";
import { Banner } from "../../components/atoms";
import { Box, Stack, Typography } from "@mui/material";
// import { industrialSolutionsStyles } from "./IndustrialSolutions.style";
import { solutions } from "./data/solutions";
import { industrialSolutionsStyles } from "./IndustrialSolutions.style";

export const IndustrialSolutions = () => {
  return (
    <>
      <Banner title=" Solutions" />
      <Stack component="section" sx={industrialSolutionsStyles.pageContainer}>
        {solutions.map((card, index) => (
          <div id={card.id} key={card.id}>
            <Stack
              sx={{
                ...industrialSolutionsStyles.cardContainer,
                backgroundColor:
                  industrialSolutionsStyles.cardContainer.backgroundColor(
                    index === 1
                  ),
              }}
            >
              <Box
                component="figure"
                sx={{
                  ...industrialSolutionsStyles.figure,
                  order: { xs: 2, md: index === 1 ? 1 : 2 },
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={industrialSolutionsStyles.image}
                ></Box>
              </Box>
              <Stack
                sx={{
                  ...industrialSolutionsStyles.textContainer,
                  order: { xs: 2, md: index === 1 ? 2 : 1 },
                  paddingLeft: index === 1 ? "0" : { xs: "0", md: "0.5rem" },
                  paddingRight: index === 1 ? { xs: "0", md: "0.5rem" } : "0",
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  sx={industrialSolutionsStyles.title}
                >
                  {card.title}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={industrialSolutionsStyles.subtitle}
                >
                  {card.subtitle}
                </Typography>
              </Stack>
            </Stack>
          </div>
        ))}
      </Stack>
    </>
  );
};
