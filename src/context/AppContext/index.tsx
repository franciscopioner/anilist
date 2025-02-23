import { useThemeContext } from "@context/ThemeContext";
import { useAnimeContext } from "@context/AnimeContext";
import { useFavoritesContext } from "@context/FavoritesContext";

export const useAppContext = () => {
  const themeContext = useThemeContext();
  const animeContext = useAnimeContext();
  const favoriteContext = useFavoritesContext();
  
  return { themeContext, animeContext, favoriteContext };
};
