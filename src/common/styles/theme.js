import { createTheme } from "@mui/material";

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
      // lineHeight: "2rem",
    },
    button: {
      // fontFamily: ["EB Garamond", "sans-serif"].join(","),
      textTransform: "none",
      boxShadow: 0,
      margin: 0,
    },
  },

  palette: {
    primary: {
      main: "#ee1b24",
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
    MuiTextField: {
      variants: [
        {
          props: { variant: "fill" },
          style: {
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderWidth: 0, // Remove border on focus
              },
              "&:hover fieldset": {
                borderWidth: 0, // Remove border on hover
              },
              "& fieldset": {
                borderWidth: 0, // Remove default border
              },
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "fill" },
          style: {
            "&:hover": {
              backgroundColor: "#ee1b24",
            },
            color: "white",
            fontWeight: 700,
            borderRadius: "0",
            backgroundColor: "#ee1b24",
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
