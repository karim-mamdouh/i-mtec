import { Box, Stack, Typography } from "@mui/material";
import { Banner } from "../../components/atoms";
import { homeStyles2 } from "./Home.style";
import { HeroCard, IndustrialCard } from "../../components/organisms";
import { SearchForm } from "../../components/molecules";
import {
  cards,
  industrialCards,
  mediaLinks,
  missionSectionCards,
} from "./data/cards";
import { MissionCard } from "../../components/organisms/missionCard/MissionCard";

export const Home2 = () => {
  console.log("in home2");
  return (
    <>
      {/* <Stack component="header" sx={homeStyles2.header}>
        <Typography component="h2" sx={homeStyles2.headerTitle}>
          iMT Industrial Solution
        </Typography>
      </Stack> */}
      <Banner
        title="Innovative Manufacturing. Exceptional Results!"
        sx={{ borderBottom: "none" }}
        fontSize={{ xs: "1rem", sm: "1.875rem" }}
      />
      {/* <Stack component="section" sx={homeStyles2.hero}>
        <Stack sx={homeStyles2.heroLeft}>
          <Box
            sx={{
              width: { xs: "80%", sm: "60%" },
              marginBottom: { xs: "2rem", md: "10px" },
            }}
          >
            <Typography
              component="h3"
              sx={homeStyles2.heroLeftTitle}
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
        <Stack component="div" sx={homeStyles2.heroRight}>
          <HeroCard
            title={cards[0].title}
            subtitle={cards[0].subtitle}
            image={cards[0].image}
            route={cards[0].route}
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
                route={cards[1].route}
              />
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
              <HeroCard
                title={cards[2].title}
                subtitle={cards[2].subtitle}
                image={cards[2].image}
                route={cards[2].route}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack> */}
      <Stack sx={{ height: "50vh", justifyContent: "center" }}>
        <Typography
          sx={{
            width: "80%",
            margin: "0 auto",
            fontSize: "1.5rem",
            fontWeight: 300,
          }}
        >
          Innovative Manufacturing Technologies (iMT) is a company specializing
          in the development of contactless sensors and power products, with a
          strong focus on the growing electric vehicle (EV) market.
          Headquartered in Egypt and with subsidiaries in Germany and Malta, our
          experienced teams, led by seasoned industry veterans, have worked
          collaboratively for over 15 years, bringing a wealth of experience and
          expertise to every project.e.
        </Typography>
      </Stack>

      <div id="industrial-cards">
        <Stack sx={homeStyles2.solutionsTitleContainer}>
          <Typography
            component="h4"
            variant="h4"
            sx={homeStyles2.solutionsTitle}
          >
            Solutions
          </Typography>
        </Stack>
      </div>
      <Stack sx={homeStyles2.solutionCardsContainer}>
        {industrialCards.map((card, index) => (
          <Box key={index} sx={homeStyles2.solutionCardContainer}>
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
      <Stack sx={homeStyles2.missionSection}>
        {missionSectionCards.map((card, index) => (
          <Box key={index} sx={homeStyles2.missionCardContainer}>
            <MissionCard
              image={card.image}
              title={card.title}
              link={card.link}
            />
          </Box>
        ))}
      </Stack>
      {/* Social Media section*/}
      <Stack sx={homeStyles2.socialMediaSection}>
        {/* <Box component="div" sx={{ padding: "1rem 1.875rem" }}>
          <Typography component="h3" sx={homeStyles2.socialMediaTitle}>
            24 / 7 Updates Via Social Media
          </Typography>
          <Typography component="h5" variant="h5" sx={{ fontSize: "1.25rem" }}>
            Join our tech community.{" "}
          </Typography>
          <Typography component="h5" variant="h5" sx={{ fontSize: "1.25rem" }}>
            Follow us today.{" "}
          </Typography>
        </Box> */}
        <Typography component="h3" sx={homeStyles2.socialMediaTitle}>
          iMT News
        </Typography>
        {/* <Box component="div" sx={homeStyles2.socialMediaLinksContainer}>
          {mediaLinks.map((link, index) => (
            <Box
              key={index}
              component="span"
              sx={
                index === 0 || index === mediaLinks.length - 1
                  ? { ...homeStyles2.socialLink, borderLeft: "1px solid #FFF" }
                  : { ...homeStyles2.socialLink }
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
        </Box> */}

        <Typography
          component="h5"
          variant="h5"
          sx={{ fontSize: "1.25rem", width: { xs: "100%", md: "33.33%" } }}
        >
          Everything You Need to Know About Innovation and New Technologies
        </Typography>

        <Box>
          <Typography component="h5" variant="h5" sx={{ fontSize: "1.25rem" }}>
            Subscribe to Our Mailing List
          </Typography>
          <SearchForm />
        </Box>
      </Stack>
    </>
  );
};
