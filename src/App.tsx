import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AnimeDetails from "./pages/AnimeDetails";
import GlobalStyle from "./styles/global";
import NotFound from "./pages/NotFound";
import Template from "./components/Template";

function App() {
  return (
    <Template>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:animeId" element={<AnimeDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </Template>
  );
}

export default App;
