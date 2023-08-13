//Material UI
import { ThemeProvider } from "@emotion/react";
import { theme } from "./common/styles/theme";
//Components
import AppRoute from "./common/routes/routes";
import NavBar from "./components/organisms/NavBar/NavBar.component";
import Footer from "./components/organisms/Footer/Footer.component";
import { Stack } from "@mui/material";
import { appStyles } from "./App.style";
import SocialMedia from "./components/organisms/SocialMedia/SocialMedia.component";
import { ScrollToTop } from "./components/atoms";
import useWindowResize from "./utilities/hooks/useWindowResize";

const customTheme = theme;

const App = () => {
  const width = useWindowResize();

  return (
    <ThemeProvider theme={customTheme}>
      <ScrollToTop />
      <NavBar />
      <Stack component="main" sx={appStyles}>
        <AppRoute />
      </Stack>
      <Footer />
      {width >= 768 && <SocialMedia />}
    </ThemeProvider>
  );
};

export default App;
