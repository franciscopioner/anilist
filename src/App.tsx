import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AnimeDetails from "@pages/AnimeDetails";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle } from "./styles/global";
import NotFound from "@pages/NotFound";
import Template from "@components/Template";
import { AnimeProvider } from "@context/AnimeContext";
import { useAppContext } from "@context/AppContext";

function App() {
  const { themeContext } = useAppContext();
  const { theme, toggleTheme } = themeContext;
  
  return (
    <AnimeProvider>
      <StyledThemeProvider theme={theme}>
        <Template toggleTheme={toggleTheme} isDarkMode={theme === darkTheme}>
          <Router>
            <GlobalStyle />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anime/:animeId" element={<AnimeDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </Template>
      </StyledThemeProvider>
    </AnimeProvider>
  );
}

export default App;
