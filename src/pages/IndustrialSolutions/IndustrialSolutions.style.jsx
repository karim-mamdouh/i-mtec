export const industrialSolutionsStyles = {
  figure: {
    width: { xs: "100%", md: "50%" },
    maxHeight: "43rem",
    // height: "25rem",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "100%",
  },
  pageContainer: {
    // gap: { xs: "15rem", xxl: "25re
    margin: "2rem 0",
    gap: "2rem",
    // borderBottom: "3px solid white",
  },
  cardContainer: {
    backgroundColor: (cond) => (cond ? "var(--primary-color)" : "black"),
    flexDirection: { xs: "column", md: "row" },
    padding: { xs: "1rem", md: "4.375rem 1rem" },
    gap: { xs: "1rem", md: 0 },
    justifyContent: "space-between",
    borderRadius: "0.8rem",
  },
  textContainer: {
    color: "white",
    width: { xs: "100%", md: "45%" },
    justifyContent: "space-evenly",
    gap: { xs: "1rem", md: "0" },
  },
  subtitle: {
    fontSize: { xs: "1.3rem", xxl: "2rem" },
  },
  title: {
    fontSize: { xs: "2rem", md: "2.25rem", xxl: "3rem" },
    textAlign: { xs: "center", md: "unset" },
    paddingBottom: "0.25rem",
  },
};
