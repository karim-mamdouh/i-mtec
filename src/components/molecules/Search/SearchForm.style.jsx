export const searchFormStyles = {
  container: {
    flexGrow: 1,
    gap: "4px",
  },
  form: {
    p: 0,
    border: "1px solid #fff",
    borderRadius: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "330px",
    height: "48px",
    backgroundColor: "transparent",
  },
  inputField: {
    flex: 1,
    outline: 0,
    borderWidth: "0",
    "& .MuiInputBase-input": {
      paddingY: "0",
      color: "#fff",
      outline: "0",
      border: "none",
      // borderColor: "transparent",
    },
  },
  submitBtn: {
    borderLeft: "1px solid #fff",
    paddingY: "11px",
    paddingX: "25px",
  },
};
