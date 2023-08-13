import React from "react";
import { Banner } from "../../components/atoms";
import { Box, Stack, Typography } from "@mui/material";
import { industrialSolutionsStyles2 } from "./IndustrialSolutions.style";
import { solutions } from "./data/solutions";

const IndustrialSolutions2 = () => {
  return (
    <>
      <Banner title=" Innovative Manufacturing. Exceptional Results!" />
      <Stack component="section" sx={industrialSolutionsStyles2.pageContainer}>
        {solutions.map((card, index) => (
          <div id={card.id} key={card.id}>
            <Stack
              sx={{
                ...industrialSolutionsStyles2.cardContainer,
                backgroundColor:
                  industrialSolutionsStyles2.cardContainer.backgroundColor(
                    index === 1
                  ),
              }}
            >
              <Box
                component="figure"
                sx={{
                  ...industrialSolutionsStyles2.figure,
                  order: { xs: 2, md: index === 1 ? 1 : 2 },
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={industrialSolutionsStyles2.image}
                ></Box>
              </Box>
              <Stack
                sx={{
                  ...industrialSolutionsStyles2.textContainer,
                  order: { xs: 2, md: index === 1 ? 2 : 1 },
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  sx={industrialSolutionsStyles2.title}
                >
                  {card.title}
                </Typography>
                <Typography
                  component="p"
                  variant="p"
                  sx={industrialSolutionsStyles2.subtitle}
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

export default IndustrialSolutions2;
