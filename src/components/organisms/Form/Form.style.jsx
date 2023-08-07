export const formStyles = {
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "2.5rem",
    maxWidth: "500px",
    justifyContent: "space-between",
  },
  input: {
    marginTop: "10px",
    width: "100%",
    borderBottomColor: "var(--primary-color)",
    fontWeight: 300,
  },
  gridInput: {
    width: { xs: "100%", md: "40%" },
  },
  formSubmitContainer: {
    width: "100%",
    marginTop: "3.75rem",
    borderTop: "1px solid var(--primary-color)",
    alignItems: "start",
    marginBottom: "3.5rem",
  },
  formSubmitBtn: {
    borderRadius: "0",
    // padding: "15px 30px",
    width: { xs: "50%", sm: "35%" },
    margin: "1.5rem auto",
    fontWeight: 700,
    fontSize: "1.1875rem",
  },
};
