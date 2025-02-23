import { useFetchAnimes } from "@hooks/useFetchAnimes";
import { Anime } from "@types";
import AnimeCard from "@components/AnimeCard";
import { AnimeGrid, LoadMoreButton } from "./styles";
import Loading from "@components/Loading";
import Modal from "@components/Modal";
import { useState, useEffect } from "react";
import { useAppContext } from "@context/AppContext";

const AnimeList: React.FC = () => {
  const { animeContext } = useAppContext();
  const { search, selectedFormat } = animeContext;
  const { animes, loading, error, handleFetchMore, hasMore } = useFetchAnimes(search, selectedFormat);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (error) {
      setIsModalVisible(true);
    }
  }, [error]);

  if (!loading && animes.length === 0 && search) {
    return <div>Nenhum resultado encontrado para esta busca.</div>;
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={closeModal} variant="error">
          {error?.includes("Erro ao buscar animes") ? (
            <div>Erro ao carregar animes. Verifique sua conexão e tente novamente.</div>
          ) : (
            <div>Ocorreu um erro inesperado. Tente novamente mais tarde.</div>
          )}
        </Modal>
      )}

      {loading && <Loading />}
      <AnimeGrid>
        {animes.map((anime: Anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </AnimeGrid>
      {hasMore && !loading && (
        <LoadMoreButton onClick={handleFetchMore} disabled={loading}>
          + Ver mais
        </LoadMoreButton>
      )}
    </>
  );
};

export default AnimeList;
