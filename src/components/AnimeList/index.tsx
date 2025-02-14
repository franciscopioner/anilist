import { useFetchAnimes } from "../../hooks/useFetchAnimes";
import { Anime } from "../../types";
import AnimeCard from "../AnimeCard";
import { AnimeGrid, LoadMoreButton } from "./styles";
import Loading from "../Loading";
import Modal from "../Modal";

interface AnimeListProps {
  search: string;
  selectedFormat: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ search, selectedFormat }) => {
  const { animes, loading, error, fetchMoreAnimes, hasMore } = useFetchAnimes(search, selectedFormat);

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

  if (!animes.length && search) {
    return <div>Nenhum resultado encontrado para esta busca.</div>;
  }

  return (
    <>
      <AnimeGrid>
        {animes.map((anime: Anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </AnimeGrid>
      {hasMore && !loading && (
        <LoadMoreButton onClick={fetchMoreAnimes} disabled={loading}>
          + Ver mais
        </LoadMoreButton>
      )}
    </>
  );
};

export default AnimeList;
