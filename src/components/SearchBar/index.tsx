import { useState } from "react";
import { SearchBarContainer, SearchButton, SearchInput } from "./styles";

const SearchBar: React.FC<{ onSearch: (value: string) => void }> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar anime..."
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchBarContainer>
  );
};

export default SearchBar;