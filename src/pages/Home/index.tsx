import { useCallback, useState } from "react";
import AnimeList from "@components/AnimeList";
import Filter from "@components/Filter";
import SearchBar from "@components/SearchBar";

const Home: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("All");

  const handleFilterChange = useCallback((format: string) => {
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