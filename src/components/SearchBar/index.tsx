import { useState } from "react";
import { SearchBarContainer, SearchButton, SearchInput } from "./styles";
import { useAppContext } from "@context/AppContext";

const SearchBar: React.FC = () => {
  const { animeContext } = useAppContext();
  const { setSearch } = animeContext;
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Buscar anime..."
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
