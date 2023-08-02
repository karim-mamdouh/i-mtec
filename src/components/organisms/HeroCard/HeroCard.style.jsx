export const heroCardStyles = {
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    opacity: "0.5",
  },
  card: {
    position: "relative",
    height: "100%",
    minHeight: { xs: "20rem", sm: "30rem" },
  },
  cardImg: {
    maxWidth: "100%",
  },
  cardContent: {
    position: "relative",
    zIndex: "2",
    color: "white",
    height: "100%",
    padding: "15px",
    justifyContent: "space-between",
  },
  cardImgContainer: {
    fontSize: 0,
  },
  button: {
    marginTop: "1rem",
    width: "fit-content",
  },
  title: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    textShadow: "rgba(0, 0, 0, 0.298039) 0px 5px 0px",
  },
  subtitle: { fontSize: { xs: "1rem", md: "1.25rem" } },
};
