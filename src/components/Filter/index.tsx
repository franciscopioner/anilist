import { FilterContainer, FilterButton } from "./styles";

type Formats = "All" | "TV" | "TV_SHORT" | "MOVIE" | "SPECIAL" | "OVA" | "ONA" | "MUSIC";

const FORMAT_LABELS: Record<Formats, string> = {
  All: "All Formats",
  TV: "TV Show",
  TV_SHORT: "TV Short",
  MOVIE: "Movie",
  SPECIAL: "Special",
  OVA: "OVA",
  ONA: "ONA",
  MUSIC: "Music",
};

const FORMATS = Object.keys(FORMAT_LABELS) as Formats[];

interface FilterProps {
  selectedFormat: Formats;
  onFilterChange: (format: Formats) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFormat, onFilterChange }) => {
  return (
    <FilterContainer>
      {FORMATS.map((format) => (
        <FilterButton
          key={format}
          onClick={() => onFilterChange(format)}
          $active={selectedFormat === format}
        >
          {FORMAT_LABELS[format]}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;
