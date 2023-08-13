export const industrialSolutionsStyles = {
  figure: {
    width: { xs: "100%", md: "50%" },
    maxHeight: "43rem",
    // height: "25rem",
  },
  image: {
    maxWidth: "100%",
    // maxHeight: "100%",
    width: "100%",
  },
  // container: {
  //   flexDirection: { xs: "column", sm: "row" },
  //   justifyContent: "center",
  //   position: "relative",
  //   width: "fit-content",
  //   marginLeft: "auto",
  //   marginRight: { xs: "auto", lg: "15%", xxl: "25%" },
  // },
  // textContainer: {
  //   width: "100%",
  //   padding: "1rem",
  //   borderRadius: "10px",
  //   color: "white",
  //   position: "absolute",
  //   left: { xs: "0", lg: "-60%" },
  //   top: { xs: "62%", sm: "90%", lg: "70%" },
  //   gap: "1rem",
  //   justifyContent: "space-evenly",
  //   maxWidth: { xs: "100%" },
  // },
  pageContainer: {
    // gap: { xs: "15rem", xxl: "25re
    marginBottom: "1rem",
    // borderBottom: "3px solid white",
  },
  cardContainer: {
    backgroundColor: (cond) => (cond ? "var(--primary-color)" : "black"),
    flexDirection: { xs: "column", md: "row" },
    padding: { xs: "1rem", md: "4.375rem 1rem" },
    gap: { xs: "1rem", md: 0 },
    justifyContent: "space-between",
  },
  textContainer: {
    color: "white",
    width: { xs: "100%", md: "45%" },
    justifyContent: "space-evenly",
    gap: { xs: "1rem", md: "0" },
  },
  subtitle: {
    fontSize: { xs: "1.2rem", xxl: "1.5rem" },
  },
  title: {
    fontSize: { xs: "2rem", md: "3rem" },
    textAlign: { xs: "center", md: "unset" },
  },
};
