export const contactStyles = {
  //   Banner Section
  banner: {
    color: "white",
    backgroundColor: "var(--primary-color)",
    padding: "20px",
    display: "flex",
    alignItems: "end",
  },
  bannerText: {
    fontSize: { xs: "1.5rem", md: "2.5rem" },
    padding: "20px",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
  },
  // Address
  address: {
    display: "flex",
    order: { xs: 1, sm: 2 },
    alignItems: "end",
  },
  addressList: {
    // width: { xs: "100%", sm: "50%" },
    listStyle: "none",
    padding: "20px",
    width: "100%",
    gap: "1rem",
    // alignItems: "center",
  },
  addressText: {
    fontSize: { xs: "1rem", md: "1.5rem" },
    fontWeight: "bold",
    marginBottom: "1rem",
    color: "var(--secondary-color)",
    textDecoration: "none",
  },

  //   Form Section
  divider: {
    margin: "1.5rem 0",
    borderTop: "1px solid var(--primary-color)",
    width: "100%",
  },
  formTitle: {
    padding: "10px 40px",
    border: "1px solid var(--primary-color)",
    width: "fit-content",
    color: "var(--primary-color)",
    fontSize: "2.125rem",
  },
  formSection: {
    display: "flex",
    alignItems: "center",
    width: { xs: "100%", sm: "50%" },
    order: { xs: 2, sm: 1 },
  },
};
