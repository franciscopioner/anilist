import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AnimeDetails from "@pages/AnimeDetails";
import NotFound from "@pages/NotFound";

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/anime/:animeId" element={<AnimeDetails />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesConfig;
