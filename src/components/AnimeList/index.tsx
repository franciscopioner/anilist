import { useFetchAnimes } from "@hooks/useFetchAnimes";
import { Anime } from "@types";
import AnimeCard from "@components/AnimeCard";
import { AnimeGrid, LoadMoreButton } from "./styles";
import Loading from "@components//Loading";
import Modal from "@components//Modal";

interface AnimeListProps {
  search: string;
  selectedFormat: string;
}

const AnimeList: React.FC<AnimeListProps> = ({ search, selectedFormat }) => {
  const { animes, loading, error, handleFetchMore, hasMore } = useFetchAnimes(search, selectedFormat);

  if (error) {
    return (
      <Modal>
        {error.includes("Erro ao buscar animes") ? (
          <div>Erro ao carregar animes. Verifique sua conexão e tente novamente.</div>
        ) : (
          <div>Ocorreu um erro inesperado. Tente novamente mais tarde.</div>
        )}
      </Modal>
    );
  }

  if (!loading && animes.length === 0 && search) {
    return <div>Nenhum resultado encontrado para esta busca.</div>;
  }

  return (
    <>
    {loading && <Loading />}
      <AnimeGrid>
        {animes.map((anime: Anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </AnimeGrid>
      {hasMore && (
        <LoadMoreButton onClick={handleFetchMore} disabled={loading}>
          {loading ? "Carregando..." : "+ Ver mais"}
        </LoadMoreButton>
      )}
    </>
  );
};

export default AnimeList;
