export const aboutStyles = {
  //   Banner Section
  banner: {
    color: "white",
    backgroundColor: "var(--primary-color)",
    padding: "20px",
  },
  bannerText: {
    fontSize: { xs: "1.5rem", md: "2.5rem" },
    padding: "20px",
  },
  bannerTitle: { textAlign: "center" },
  //   Logo Section
  logoSection: {
    display: "flex",
    alignItems: "center",
    paddingTop: "1.875rem",
    paddingBottom: "0.625rem",
  },
  figure: {
    width: { xs: "60%", sm: "20%" },
    fontSize: "0",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "5px 15px",
    width: (width) => (width >= 768 ? "30%" : "60%"),
  },
  logo: {
    width: "100%",
  },
  //   Info Section
  info: {
    backgroundColor: "var(--ternary-color)",
    width: { xs: "100%", sm: "80%" },
    margin: "0 auto",
  },
  infoList: { listStyle: "none", padding: { xs: "20px 0", sm: "20px" } },
  infoPoint: {
    fontSize: "1.5rem",
    marginBottom: "30px",
    lineHeight: "1.5",
    textAlign: "justify",
    fontFamily: "Lato",
    fontWeight: 300,
  },
  headerCarousel: {
    backgroundColor: "var(--secondary-color)",
    fontSize: "1.5rem",
    width: "100%",
    minHeight: "100%",
  },
  //   Form Section
  formTitleContainer: {
    marginTop: "3.75rem",
    borderTop: "1px solid var(--primary-color)",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  formTitle: {
    padding: "10px 40px",
    border: "1px solid var(--primary-color)",
    width: "fit-content",
    // color: "var(--primary-color)",
    fontSize: { xs: "1rem", sm: "1.5625rem" },
    borderTop: "none",
    textAlign: "center",
  },
  formSection: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
    margin: "3.5rem auto",
  },
  partnerFigure: {
    width: { xs: "100%", md: "40%" },
    marginBottom: "2.5rem",
  },
  image: {
    maxWidth: "100%",
  },
};
