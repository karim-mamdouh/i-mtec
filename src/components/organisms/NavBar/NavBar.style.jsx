export const navBarStyles = {
  nav: {
    paddingTop: "2.5rem",
  },
  container: {
    margin: "0 auto",
    width: "90%",
    flexDirection: "row",
    alignItems: "stretch",
    border: "1px solid black",
    justifyContent: { xs: "space-between", md: "start" },
  },
  logo: {
    maxWidth: "100%",
  },
  logoContainer: {
    borderRight: "1px solid black",
    padding: "5px 15px",
    width: (width) => (width >= 768 ? "11%" : "30%"),
  },
  linksList: {
    listStyle: "none",
    width: "42.5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  title: {
    width: "42.5%",
    paddingLeft: "1.5rem",
    borderRight: "1px solid black",
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
  },
  sideNavContainer: {
    borderLeft: "1px solid black",
  },
  barsIcon: {
    fontSize: "2rem",
    margin: "10px",
  },
  bannerText: {
    fontSize: { xs: "1.5rem", md: "2.5rem" },
    padding: "20px",
    backgroundColor: "var(--primary-color)",
    color: "white",
  },
  bannerTitle: { textAlign: "center" },
  bannerContainer: {
    width: "90%",
    margin: "0 auto",
    borderBottom: "1px solid white",
  },
};
