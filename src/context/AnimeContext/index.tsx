import { createContext, useContext, ReactNode, useState } from "react";
import { Formats } from "@types";

interface AnimeContextType {
  search: string;
  setSearch: (search: string) => void;
  selectedFormat: Formats;
  setSelectedFormat: (format: Formats) => void;
  sortBy: string;
  setSortBy: (sortBy: string) => void;
}

const AnimeContext = createContext<AnimeContextType | undefined>(undefined);

export const AnimeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [search, setSearch] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState<Formats>("All");
  const [sortBy, setSortBy] = useState<string>("title");

  return (
    <AnimeContext.Provider
      value={{ search, setSearch, selectedFormat, setSelectedFormat, sortBy, setSortBy }}
    >
      {children}
    </AnimeContext.Provider>
  );
};

export const useAnimeContext = (): AnimeContextType => {
  const context = useContext(AnimeContext);
  if (!context) {
    throw new Error("useAnimeContext deve ser usado dentro de um AnimeProvider");
  }
  return context;
};