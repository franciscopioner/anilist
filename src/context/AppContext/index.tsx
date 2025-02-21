import { useThemeContext } from "@context/ThemeContext";
import { useAnimeContext } from "@context/AnimeContext";

export const useAppContext = () => {
  const themeContext = useThemeContext();
  const animeContext = useAnimeContext();
  
  return { themeContext, animeContext };
};
