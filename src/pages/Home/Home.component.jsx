import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { homeStyles } from "./Home.style";
import HeroCard from "../../components/organisms/HeroCard/HeroCard.component";
import { cards, industrialCards, missionSectionCards } from "./data/cards";
import IndustrialCard from "../../components/organisms/IndustrialCards/IndustrialCards.component";
import MissionCard from "../../components/organisms/missionCard/Mission.component";

export const Home = () => {
  return (
    <>
      <Stack component="header" sx={homeStyles.header}>
        <Typography component="h2" sx={homeStyles.headerTitle}>
          iMT Industrial Solution
        </Typography>
      </Stack>
      <Stack component="section" sx={homeStyles.hero}>
        <Stack sx={homeStyles.heroLeft}>
          <Box sx={{ width: "60%" }}>
            <Typography component="h3" sx={homeStyles.heroLeftTitle}>
              iMT News
            </Typography>
            <Typography component="p">
              Everything You Need to Know About Innovation and New Technologies
            </Typography>
          </Box>
        </Stack>
        <Stack component="div" sx={homeStyles.heroRight}>
          <HeroCard
            title={cards[0].title}
            subtitle={cards[0].subtitle}
            image={cards[0].image}
          />
          <Stack
            component="div"
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <HeroCard
                title={cards[1].title}
                subtitle={cards[1].subtitle}
                image={cards[1].image}
              />
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <HeroCard
                title={cards[2].title}
                subtitle={cards[2].subtitle}
                image={cards[2].image}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={homeStyles.solutionsTitleContainer}>
        <Typography component="h4" sx={homeStyles.solutionsTitle}>
          Industrial Solutions
        </Typography>
      </Stack>
      <Stack sx={homeStyles.solutionCardsContainer}>
        {industrialCards.map((card, index) => (
          <Box sx={homeStyles.solutionCardContainer}>
            <IndustrialCard
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
            />
          </Box>
        ))}
      </Stack>
      {/* Mission section */}
      <Stack sx={homeStyles.missionSection}>
        {missionSectionCards.map((card, index) => (
          <Box sx={homeStyles.missionCardContainer}>
            <MissionCard key={index} image={card.image} title={card.title} />
          </Box>
        ))}
      </Stack>
    </>
  );
};
