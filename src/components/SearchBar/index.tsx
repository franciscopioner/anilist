import { useState } from "react";
import { SearchBarContainer, SearchButton, SearchInput } from "./styles";

const SearchBar: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Buscar anime..."
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;