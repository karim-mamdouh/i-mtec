export const navBarStyles = {
  nav: {
    paddingTop: "2.5rem",
  },
  container: {
    margin: "0 auto",
    // width: "90%",
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
    border: "1px solid black",
    justifyContent: { xs: "space-between", md: "start" },
  },
  logo: {
    maxWidth: "100%",
  },
  logoContainer: {
    // borderRight: "1px solid black",
    padding: "5px 15px",
    width: (width) => (width >= 768 ? "11%" : "30%"),
  },
  linksList: {
    listStyle: "none",
    width: { xs: "45%", md: "37%" },
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    width: { xs: "52%", sm: "42%", md: "52%" },
    paddingLeft: { xs: "0.25rem", sm: "1.5rem" },
    // borderRight: { xs: "none", sm: "1px solid black" },
    justifyContent: "center",
  },
  figure: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: "black",
    textDecoration: "none",
    margin: "auto 0",
  },
  activeLink: {
    color: "var(--primary-color)",
    margin: "auto 0",
    textDecoration: "none",
    fontWeight: 400,
  },
};
