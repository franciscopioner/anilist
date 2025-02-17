import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "./styles/global";
import NotFound from "./pages/NotFound";
import Template from "./components/Template";
import { useState } from "react";

function App() {
  const savedTheme = localStorage.getItem("theme");
  const initialTheme = savedTheme ? (savedTheme === "dark" ? darkTheme : lightTheme) : lightTheme;
  
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    
    localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
  };
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
