import { FilterContainer, FilterButton, SortButtonContainer, SortButton } from "./styles";
import { useAppContext } from "@context/AppContext";
import { Formats } from "@types";
import { FaSortAlphaDown, FaSortNumericDownAlt } from "react-icons/fa";

const FORMAT_LABELS: Record<Formats, string> = {
  All: "All Formats",
  TV: "TV Show",
  TV_SHORT: "TV Short",
  MOVIE: "Movie",
  SPECIAL: "Special",
  OVA: "OVA",
  ONA: "ONA",
  MUSIC: "Music",
  FAVORITES: "Favorites",
};

const FORMATS = Object.keys(FORMAT_LABELS) as Formats[];

const Filter: React.FC = () => {
  const { animeContext } = useAppContext();
  const { selectedFormat, setSelectedFormat, sortBy, setSortBy } = animeContext;

  const handleSortByTitle = () => {
    setSortBy("title");
  };

  const handleSortByScore = () => {
    setSortBy("score");
  };

  return (
    <FilterContainer>
      {FORMATS.map((format) => (
        <FilterButton
          key={format}
          onClick={() => setSelectedFormat(format)}
          $active={selectedFormat === format}
        >
          {FORMAT_LABELS[format]}
        </FilterButton>
      ))}
      <SortButtonContainer>
        <SortButton
          onClick={handleSortByTitle}
          $active={sortBy === "title"}
        >
          <FaSortAlphaDown style={{ fontSize: "1.5rem" }} />
        </SortButton>
        <SortButton
          onClick={handleSortByScore}
          $active={sortBy === "score"}
        >
          <FaSortNumericDownAlt style={{ fontSize: "1.5rem" }} />
        </SortButton>
      </SortButtonContainer>
    </FilterContainer>
  );
};

export default Filter;