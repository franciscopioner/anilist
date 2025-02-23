import { FilterContainer, FilterButton } from "./styles";
import { useAppContext } from "@context/AppContext";
import { Formats } from "@types";

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
  const { selectedFormat, setSelectedFormat } = animeContext;

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
    </FilterContainer>
  );
};

export default Filter;