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
    padding: "1.25rem 0",
  },
  figure: {
    width: { xs: "70%", sm: "20%" },
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
  },
  infoList: { listStyle: "none", padding: "20px" },
  infoPoint: {
    fontSize: "1.5rem",
    marginBottom: "30px",
    lineHeight: "1.5",
    textAlign: "justify",
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
    color: "var(--primary-color)",
    fontSize: "2.125rem",
    textAlign: "center",
  },
  formSection: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
  },
  partnerFigure: {
    width: { xs: "100%", md: "40%" },
    marginBottom: "2.5rem",
  },
  image: {
    maxWidth: "100%",
  },
};
