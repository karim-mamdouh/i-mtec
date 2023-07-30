import background from "../../assets/images/background.webp";

export const homeStyles = {
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--primary-color)",
    color: "white",
    borderBottom: "1px solid white",
  },
  headerTitle: {
    padding: "20px auto",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  hero: {
    flexDirection: { xs: "column", sm: "row" },
  },
  heroLeft: {
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "var(--primary-color)",
    color: "white",
    width: { xs: "100%", sm: "40%" },
    backgroundImage: { xs: "unset", sm: `url(${background})` },
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0% 100%",
  },
  heroLeftTitle: {
    fontSize: { xs: "1.5rem", sm: "3.45rem" },
    lineHeight: "3.5rem",
    marginBottom: "10px",
  },
  heroRight: {
    width: { xs: "100%", sm: "60%" },
  },
  solutionsTitleContainer: {
    marginTop: "3.75rem",
    borderTop: "1px solid var(--primary-color)",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  solutionsTitle: {
    padding: "10px 40px",
    border: "1px solid var(--primary-color)",
    width: "fit-content",
    color: "var(--primary-color)",
    fontSize: "2.125rem",
  },
  solutionCardsContainer: {
    flexDirection: "row",
    gap: "10px",
    flexWrap: { xs: "wrap", sm: "nowrap" },
    justifyContent: "center",
  },
  solutionCardContainer: {
    width: { xs: "100%", md: "33.33%" },
    display: "flex",
    justifyContent: "center",
  },
  // Mission Section
  missionSection: {
    paddingTop: "50px",
    flexDirection: "row",
    gap: "0",
    flexWrap: { xs: "wrap", sm: "nowrap" },
  },
  missionCardContainer: { width: { xs: "100%", sm: "33.33%" } },
  // Social Media Section
  socialMediaSection: {
    backgroundColor: "var(--primary-color)",
    display: "flex",
    margin: "20px 0",
    flexDirection: { xs: "column", md: "row" },
    gap: "30px",
    color: "white",
  },
  socialMediaTitle: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  socialMediaLinksContainer: {
    display: "flex",
    justifyContent: "center",
  },
  socialLink: {
    color: "white",
    padding: " 20px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid white",
  },
};
