import { useNavigate } from "react-router-dom";
import { Anime } from "@types";
import { Card, Title, Score, GenresContainer, GenreTag, TitleContainer } from "./styles";
import { normalizeText } from "@utils/normalize";
import { HeartButton } from "@components/HeartButton";
import { useAppContext } from "@context/AppContext";

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  const navigate = useNavigate();
  const { favoriteContext } = useAppContext();
  const { addFavorite, removeFavorite, isFavorite } = favoriteContext;
  const isFavorited = isFavorite(anime.id);

  const handleClick = () => {
    navigate(`/anime/${anime.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorited) {
      removeFavorite(anime.id);
    } else {
      addFavorite(anime.id);
    }
  };

  return (
    <Card $imageUrl={anime.coverImage.large} onClick={handleClick}>
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
      {anime.averageScore?.toString() && <Score $score={anime.averageScore}>{anime.averageScore}%</Score>}
      <HeartButton onClick={handleFavoriteClick}>
        {isFavorited ? "❤️" : "🤍"}
      </HeartButton>
    </Card>
  );
};

export default AnimeCard;