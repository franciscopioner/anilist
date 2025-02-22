import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface FavoritesContextType {
  favorites: number[];
  addFavorite: (animeId: number) => void;
  removeFavorite: (animeId: number) => void;
  isFavorite: (animeId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (animeId: number) => {
    setFavorites((prev) => {
      const newFavorites = [...prev, animeId];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const removeFavorite = (animeId: number) => {
    setFavorites((prev) => {
      const newFavorites = prev.filter((id) => id !== animeId);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const isFavorite = (animeId: number) => {
    return favorites.includes(animeId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavoritesContext deve ser usado dentro de um FavoritesProvider");
  }
  return context;
};