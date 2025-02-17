import { useCallback, useState } from "react";
import AnimeList from "@components/AnimeList";
import Filter from "@components/Filter";
import SearchBar from "@components/SearchBar";
import { Formats } from "@types";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<Formats>("All");

  const handleFilterChange = useCallback((format: Formats) => {
    setSelectedFormat(format);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  return (
    <>
      <Filter selectedFormat={selectedFormat} onFilterChange={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <AnimeList search={search} selectedFormat={selectedFormat} />
    </>
  );
};

export default Home;