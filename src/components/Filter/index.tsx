import { FilterContainer, FilterButton } from "./styles";

const FORMAT_LABELS: Record<string, string> = {
  All: "All Formats",
  TV: "TV Show",
  TV_SHORT: "TV Short",
  MOVIE: "Movie",
  SPECIAL: "Special",
  OVA: "OVA",
  ONA: "ONA",
  MUSIC: "Music",
};

const FORMATS = Object.keys(FORMAT_LABELS);

interface FilterProps {
  selectedFormat: string;
  onFilterChange: (format: string) => void;
}

const Filter: React.FC<FilterProps> = ({ selectedFormat, onFilterChange }) => {
  return (
    <FilterContainer>
      {FORMATS.map((format) => (
        <FilterButton
          key={format}
          onClick={() => onFilterChange(format)}
          active={selectedFormat === format}
        >
          {FORMAT_LABELS[format]}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default Filter;
