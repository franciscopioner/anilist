import { useNavigate } from "react-router-dom";
import { Anime } from "@types";
import { Card, Title, Score, GenresContainer, GenreTag, TitleContainer } from "./styles";
import { normalizeText } from "@utils/normalize";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/anime/${anime.id}`);
  };

  return (
    <Card imageUrl={anime.coverImage.large} onClick={handleClick}>
      <TitleContainer>
        <Title>{normalizeText(anime.title.romaji)}</Title>
        <GenresContainer>
          {anime.genres?.length ? (
            anime.genres.map((genre) => <GenreTag key={genre}>{genre}</GenreTag>)
          ) : (
            <GenreTag>Sem gênero</GenreTag>
          )}
        </GenresContainer>
      </TitleContainer>
      {anime.averageScore?.toString() && <Score score={anime.averageScore}>{anime.averageScore}%</Score>}
    </Card>
  );
};

export default AnimeCard;
