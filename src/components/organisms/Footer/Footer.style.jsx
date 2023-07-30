export const footerStyle = {
  logo: {
    borderRight: "1px solid black",
    display: "flex",
    textDecoration: "none",
    color: "#fff",
    width: { xs: "100%", md: "50%" },
    gap: "15px",
    height: "fit-content",
    alignSelf: { xs: "start", md: "end" },
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
  linksBox: { margin: "20px", fontSize: "3rem" },
  link: {
    color: "#fff",
    display: "block",
    marginBottom: "15px",
    padding: "0 20px",
  },
  desc: {
    fontSize: "16px",
    width: { xs: "100%", sm: "360px" },
  },
};
