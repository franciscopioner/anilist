import { useParams } from "react-router-dom";
import Loading from "@components/Loading";
import { Banner, Title, Description, InfoContainer, Score, GenresContainer, GenreTag, BannerContainer, DefaultBannerContainer, IconWrapper } from "./styles";
import { useFetchAnimeDetails } from "@hooks/useFetchAnimeDetails";
import Modal from "@components/Modal";
import { useEffect, useState } from "react";
import { HeartButton } from "@components/HeartButton";
import { useAppContext } from "@context/AppContext";

const AnimeDetails: React.FC = () => {
  const { animeId } = useParams<{ animeId: string }>();
  const { anime, loading, error } = useFetchAnimeDetails(Number(animeId));
  const { favoriteContext } = useAppContext();
  const { addFavorite, removeFavorite, isFavorite } = favoriteContext;
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
      <BannerContainer>
        {bannerImage ? (
          <Banner src={bannerImage} alt={`Banner de ${title.romaji}`} />
        ) : (
          <DefaultBannerContainer>
            <IconWrapper>
              <span>Imagem indisponível</span>
            </IconWrapper>
          </DefaultBannerContainer>
        )}
        <HeartButton onClick={handleFavoriteClick}>
          {isFavorited ? "❤️" : "🤍"}
        </HeartButton>
      </BannerContainer>
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
    </>
  );
};

export default AnimeDetails;