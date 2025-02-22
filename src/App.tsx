import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle } from "@styles/global";
import Template from "@components/Template";
import { AnimeProvider } from "@context/AnimeContext";
import { useAppContext } from "@context/AppContext";
import RoutesConfig from "@routes/index";

function App() {
  const { themeContext } = useAppContext();
  const { theme, toggleTheme } = themeContext;

  return (
    <AnimeProvider>
      <StyledThemeProvider theme={theme}>
        <Template toggleTheme={toggleTheme} isDarkMode={theme === darkTheme}>
          <Router>
            <GlobalStyle />
            <RoutesConfig />
          </Router>
        </Template>
      </StyledThemeProvider>
    </AnimeProvider>
  );
}

export default App;
