import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { Banner, Title, Description, InfoContainer, Score, GenresContainer, GenreTag } from "./styles";
import { useFetchAnimeDetails } from "../../hooks/useFetchAnimeDetails";
import Modal from "../../components/Modal";

const AnimeDetails: React.FC = () => {
  const { animeId } = useParams<{ animeId: string }>();
  const { anime, loading, error } = useFetchAnimeDetails(Number(animeId));

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Modal>
        {error}
      </Modal>
    );
  }

  if (!anime) {
    return <div>Não encontrado.</div>;
  }

  const { title, description, bannerImage, averageScore, genres } = anime;

  return (
    <>
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
    </>
  );
};

export default AnimeDetails;
