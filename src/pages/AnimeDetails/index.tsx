import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import { Banner, Title, Description, InfoContainer, Score, GenresContainer, GenreTag } from "./styles";
import { useFetchAnimeDetails } from "@hooks/useFetchAnimeDetails";
import Modal from "@components/Modal";
import { useFavoritesContext } from "@context/FavoritesContext";
import { DetailsHeartButton } from "@components/HeartButton";
import { useEffect, useState } from "react";

const AnimeDetails: React.FC = () => {
  const { animeId } = useParams<{ animeId: string }>();
  const { anime, loading, error } = useFetchAnimeDetails(Number(animeId));
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesContext();
  const isFavorited = isFavorite(Number(animeId));
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFavoriteClick = () => {
    if (isFavorited) {
      removeFavorite(Number(animeId));
    } else {
      addFavorite(Number(animeId));
    }
  };

  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (!anime) {
    return <div>Não encontrado.</div>;
  }

  const { title, description, bannerImage, averageScore, genres } = anime;

  return (
    <>
      {isModalVisible && (
        <Modal onClose={closeModal} variant="error">
          {error?.includes("Erro ao buscar detalhes do anime") ? (
            <div>Erro ao carregar detalhes do anime. Verifique sua conexão e tente novamente.</div>
          ) : (
            <div>Ocorreu um erro inesperado. Tente novamente mais tarde.</div>
          )}
        </Modal>
      )}

      {bannerImage && <Banner src={bannerImage} alt={`Banner de ${title.romaji}`} />}
      <Title>{title.romaji}</Title>
      {averageScore && <Score>⭐ {averageScore}%</Score>}
      <GenresContainer>
        {genres.map((genre) => (
          <GenreTag key={genre}>{genre}</GenreTag>
        ))}
      </GenresContainer>
      <InfoContainer>
        <Description dangerouslySetInnerHTML={{ __html: description || "Descrição não disponível." }} />
      </InfoContainer>
      <DetailsHeartButton onClick={handleFavoriteClick} $isFavorited={isFavorited}>
        {isFavorited ? "❤️" : "🤍"}
      </DetailsHeartButton>
    </>
  );
};

export default AnimeDetails;