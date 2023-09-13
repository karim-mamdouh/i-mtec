import background from "../../assets/images/background.webp";

export const homeStyles2 = {
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
    width: { xs: "100%", sm: "40%", lg: "30%" },
    // backgroundImage: { xs: "unset", sm: `url(${background})` },
    backgroundRepeat: "no-repeat",
    order: { xs: 2, sm: 1 },
    backgroundPosition: "0% 100%",
  },
  heroLeftTitle: {
    fontSize: { xs: "1.5rem", sm: "3.45rem" },
    lineHeight: "3.5rem",
    marginBottom: "3rem",
    whiteSpace: "pre-wrap",
  },
  heroRight: {
    width: { xs: "100%", sm: "60%", lg: "70%" },
    order: { xs: 1, sm: 2 },
  },
  solutionsTitleContainer: {
    // marginTop: "3.75rem",
    borderTop: "1px solid var(--primary-color)",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  solutionsTitle: {
    padding: "0.625rem 3.2rem",
    border: "1px solid var(--primary-color)",
    borderTop: "none",
    width: "fit-content",
    // color: "var(--primary-color)",
    textAlign: "center",
    fontSize: { xs: "1rem", sm: "1.5625rem" },
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
    paddingTop: "20px",
    flexDirection: "row",
    gap: "0",
    flexWrap: { xs: "wrap", sm: "nowrap" },
  },
  missionCardContainer: {
    width: { xs: "100%", sm: "33.33%" },
    height: "6.25rem",
  },
  // Social Media Section
  socialMediaSection: {
    backgroundColor: "var(--primary-color)",
    display: "flex",
    margin: "20px 0",
    flexDirection: { xs: "column", md: "row" },
    // justifyContent: "space-between",
    gap: "30px",
    color: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "2rem",
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
    height: { xs: "4rem", md: "100%" },
    display: "flex",
    alignItems: "center",
    borderTop: { xs: "1px solid white", md: "none" },
    borderRight: "1px solid white",
    flexGrow: 1,
    justifyContent: "center",
  },
};
