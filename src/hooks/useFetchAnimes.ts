import { useState, useEffect, useCallback, useMemo } from "react";
import { fetchAnimes } from "../api/anilist";
import { Anime } from "../types";

export const useFetchAnimes = (search: string, format: string) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchMoreAnimes = useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    setError(null);

    try {
      const data = await fetchAnimes({ search, format, page });
      setAnimes((prev) => (page === 1 ? data.media : [...prev, ...data.media]));
      setHasMore(data.pageInfo.hasNextPage);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }, [search, format, page, hasMore, loading]);

  useEffect(() => {
    setPage(1);
    setAnimes([]);
    setHasMore(true);
    fetchMoreAnimes();
  }, [search, format]);

  return useMemo(
    () => ({ animes, loading, error, fetchMoreAnimes, hasMore }),
    [animes, loading, error, hasMore, fetchMoreAnimes]
  );
};
