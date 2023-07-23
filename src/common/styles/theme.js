import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["EB Garamond", "sans-serif"].join(","),

    h1: {
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    p: {
      fontFamily: ["Lato", "sans-serif"].join(","),
      fontWeight: 400,
    },
    button: {
      fontFamily: ["EB Garamond", "sans-serif"].join(","),
      textTransform: "none",
      boxShadow: 0,
      margin: 0,
    },
  },

  palette: {
    primary: {
      main: "#d00b22",
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
      xl: 1536,
    },
  },

  //   theme_palette: {
  //     primaryColor: "#344C68",

  //     secondaryColor: "#66C8CE",

  //     grey200: "#6E7A8A",

  //     grey300: "#979797",

  //     grey400: "#9E9E9E",

  //     grey800: "#333F51",

  //     grey900: "#1A1A1A",

  //     lightGrey: "#D6DBE1",
  //   },

  components: {
    MuiButtonBase: {
      defaultProps: {
        // disableRipple: true,
        // disableTouchRipple: true,
      },
    },

    MuiButton: {
      variants: [
        {
          props: { variant: "fill" },
          style: {
            "&:hover": {
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
            },
            color: "white",
            fontWeight: 400,
            borderRadius: "8px",
            backgroundColor: "#d00b22",
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
        // {
        //   props: { variant: "text" },
        //   style: {
        //     "&:hover": {
        //       background: "transparent",
        //     },
        //     padding: 0,
        //     fontWeight: 400,
        //     backgroundColor: "white",
        //   },
        // },
      ],
    },
  },
});
