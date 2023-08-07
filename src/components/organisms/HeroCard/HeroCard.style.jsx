export const heroCardStyles = {
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: "0.35",
  },
  card: {
    position: "relative",
    height: "100%",
    border: "1px solid white",

    // minHeight: { xs: "20rem", sm: "30rem" },
  },
  cardImg: {
    maxWidth: "100%",
  },
  cardContent: {
    position: "absolute",
    top: 0,
    zIndex: "2",
    color: "white",
    height: "100%",
    padding: { xs: "7px", sm: "15px" },
    justifyContent: "space-between",
  },
  cardImgContainer: {
    fontSize: 0,
  },
  button: {
    marginTop: "1rem",
    fontSize: { xs: "12px", sm: "16px" },
    width: "fit-content",
    padding: { xs: "6px", sm: "6px 16px" },
  },
  title: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    textShadow: "rgba(0, 0, 0, 0.298039) 0px 5px 0px",
  },
  subtitle: { fontSize: { xs: "1rem", md: "1.25rem" } },
};
