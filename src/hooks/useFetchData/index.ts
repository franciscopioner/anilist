import { useState, useCallback } from "react";
import { fetchMoreAnimes } from "../../services/fetchMoreAnimes";
import { Anime } from "../../types";

export const useFetchData = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (search: string, format: string, page: number, hasMore: boolean) => {
      if (!hasMore) return;

      setLoading(true);
      setError(null);

      try {
        const hasNextPage = await fetchMoreAnimes({
          search,
          format,
          page,
          hasMore,
          setAnimes,
          setLoading,
          setError,
        });
        return hasNextPage;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { animes, loading, error, fetchData, setAnimes };
};