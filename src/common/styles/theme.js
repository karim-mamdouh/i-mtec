import { createTheme } from "@mui/material";

const primaryColor = "#cc0000";

export const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
    fontWeightLight: 300,
    h1: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    p: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontWeight: 300,
      textAlign: "justify",
    },
    button: {
      textTransform: "none",
      boxShadow: 0,
      margin: 0,
    },
  },

  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#000",
    },
    text: {
      main: "#fff",
      secondary: "#000",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 900,
      lg: 1200,
      xl: 1300,
      xxl: 1800,
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "fill" },
          style: {
            "&:hover": {
              backgroundColor: primaryColor,
            },
            color: "white",
            fontWeight: 700,
            borderRadius: "0",
            backgroundColor: primaryColor,
            fontSize: "1rem",
          },
        },

        {
          props: { variant: "outline" },
          style: {
            "&:hover": {
              background: "white",
              color: "black",
            },
            color: "white",
            border: "1px solid white",
            borderRadius: 0,
            backgroundColor: "transparent",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "footer" },
          style: {
            "&:hover": {
              background: "white",
              color: "black",
            },
            color: "white",
            border: "1px solid white",
            backgroundColor: "transparent",
            fontWeight: 500,
            borderRadius: "10px",
          },
        },
      ],
    },
  },
});
