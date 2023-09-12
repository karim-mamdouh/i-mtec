export const footerStyle = {
  logo: {
    borderRight: "1px solid black",
    display: "flex",
    textDecoration: "none",
    color: "#fff",
    width: { xs: "100%", md: "50%" },
    gap: "15px",
    height: "fit-content",
    alignSelf: "start",
  },
  title: {
    letterSpacing: "10px",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  linksContainer: {
    display: "flex",
    width: { xs: "100%", md: "25%" },
    flexDirection: "column",
  },
  linksBox: {
    // margin: "20px",
    // fontSize: "3rem",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: { xs: "space-between", sm: "center" },
  },
  link: {
    color: "#fff",
    display: "block",
    marginBottom: "15px",
    // padding: "0 20px",
    width: "41%",
  },
  desc: {
    fontSize: "16px",
    width: { xs: "100%", sm: "360px" },
  },
  block: {
    width: { xs: "100%", lg: "24%" },
  },
  subscribe: { width: { xs: "100%", lg: "40%" } },

  socialLink: {
    color: "white",
    backgroundColor: "black",
    padding: "3px",
    border: "1px solid transparent",
    borderRadius: "50% 50%",
    display: "flex",
    justifyContent: "center",
  },
  socialMediaContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
};
