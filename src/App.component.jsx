//MUI
import { Stack } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
//Components
import { Footer, NavBar, SocialMedia } from "./components/organisms";
import AppRoute from "./common/routes/AppRoutes";
import { ScrollToTop } from "./components/atoms";
//Hooks
import { useWindowResize } from "./utilities/hooks";
//Styles
import { theme } from "./common/styles/theme";
import { appStyles } from "./App.style";

const customTheme = theme;

const App = () => {
  const width = useWindowResize();

  return (
    <ThemeProvider theme={customTheme}>
      <ScrollToTop />
      <NavBar />
      <Stack component="main" sx={appStyles.main}>
        <AppRoute />
      </Stack>
      <Footer />
      {width >= 768 && <SocialMedia />}
    </ThemeProvider>
  );
};

export default App;
