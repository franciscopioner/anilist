import { useState, useEffect } from "react";
import { fetchAnimeDetails } from "@services/fetchAnimeDetails";
import { Anime } from "@types";

export const useFetchAnimeDetails = (animeId: number) => {
  const [anime, setAnime] = useState<Anime | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAnimeDetails(animeId);
        setAnime(data);
      } catch (err) {
        setError("Erro ao carregar detalhes do anime. Tente novamente mais tarde.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [animeId]);

  return { anime, loading, error };
};
