import { Box, Stack, Typography } from "@mui/material";
import { Banner } from "../../components/atoms";
import { homeStyles } from "./Home.style";
import {
  HeroCard,
  IndustrialCard,
  MissionCard,
} from "../../components/organisms";
import { SearchForm } from "../../components/molecules";
import {
  cards,
  industrialCards,
  mediaLinks,
  missionSectionCards,
} from "./data/cards";

export const Home = () => {
  return (
    <>
      {/* <Stack component="header" sx={homeStyles.header}>
        <Typography component="h2" sx={homeStyles.headerTitle}>
          iMT Industrial Solution
        </Typography>
      </Stack> */}
      <Banner
        title="Innovative Manufacturing. Exceptional Results!"
        sx={{ borderBottom: "none" }}
        fontSize={{ xs: "1rem", sm: "1.875rem" }}
      />
      <Stack component="section" sx={homeStyles.hero}>
        <Stack sx={homeStyles.heroLeft}>
          <Box
            sx={{
              width: { xs: "80%", sm: "60%" },
              marginBottom: { xs: "2rem", md: "10px" },
            }}
          >
            <Typography
              component="h3"
              sx={homeStyles.heroLeftTitle}
              variant="h3"
            >
              iMT News
            </Typography>
            <Typography component="p" variant="p">
              Everything You Need to Know About Innovation and New Technologies
            </Typography>
          </Box>

          <Stack sx={{ width: { xs: "80%", sm: "60%" }, marginBottom: "10px" }}>
            <Typography
              component="p"
              variant="p"
              sx={{ fontSize: "1.2rem", marginBottom: "10px" }}
            >
              Subscribe to Receive the Latest Tech News
            </Typography>
            <SearchForm />
          </Stack>
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
      <div id="industrial-cards">
        <Stack sx={homeStyles.solutionsTitleContainer}>
          <Typography
            component="h4"
            variant="h4"
            sx={homeStyles.solutionsTitle}
          >
            Industrial Solutions
          </Typography>
        </Stack>
      </div>
      <Stack sx={homeStyles.solutionCardsContainer}>
        {industrialCards.map((card, index) => (
          <Box key={index} sx={homeStyles.solutionCardContainer}>
            <IndustrialCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              id={card.id}
            />
          </Box>
        ))}
      </Stack>
      {/* Mission section */}
      <Stack sx={homeStyles.missionSection}>
        {missionSectionCards.map((card, index) => (
          <Box key={index} sx={homeStyles.missionCardContainer}>
            <MissionCard
              image={card.image}
              title={card.title}
              link={card.link}
            />
          </Box>
        ))}
      </Stack>
      {/* Social Media section*/}
      <Stack sx={homeStyles.socialMediaSection}>
        <Box component="div" sx={{ padding: "1rem 1.875rem" }}>
          <Typography component="h3" sx={homeStyles.socialMediaTitle}>
            24 / 7 Updates Via Social Media
          </Typography>
          <Typography component="h5" variant="h5" sx={{ fontSize: "1.25rem" }}>
            Join our tech community.{" "}
          </Typography>
          <Typography component="h5" variant="h5" sx={{ fontSize: "1.25rem" }}>
            Follow us today.{" "}
          </Typography>
        </Box>
        <Box component="div" sx={homeStyles.socialMediaLinksContainer}>
          {mediaLinks.map((link, index) => (
            <Box
              key={index}
              component="span"
              sx={
                index === 0 || index === mediaLinks.length - 1
                  ? { ...homeStyles.socialLink, borderLeft: "1px solid #FFF" }
                  : { ...homeStyles.socialLink }
              }
            >
              <Typography
                component="a"
                href={link.link}
                target="_blank"
                style={{ color: "#FFF" }}
              >
                {link.icon}
              </Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </>
  );
};
