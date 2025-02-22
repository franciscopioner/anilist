import { useState, useEffect, useCallback } from "react";
import { fetchAnimes } from "@api/anilist";
import { Anime } from "@types";
import { useFavoritesContext } from "@context/FavoritesContext";

export const useFetchAnimes = (search: string, format: string) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { favorites } = useFavoritesContext();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      if (format === "FAVORITES") {
        const data = await fetchAnimes({ search, format: "All", page, perPage: 1000 });
        const filteredAnimes = data.media.filter((anime: Anime) => favorites.includes(anime.id));
        setAnimes(filteredAnimes);
        setHasMore(false);
      } else {
        const data = await fetchAnimes({ search, format, page });
        setAnimes((prev) => (page === 1 ? data.media : [...prev, ...data.media]));
        setHasMore(data.pageInfo.hasNextPage);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }, [search, format, page, favorites]);

  useEffect(() => {
    setPage(1);
    setAnimes([]);
    setHasMore(true);
  }, [format]);

  useEffect(() => {
    fetchData();
  }, [search, format, page]);

  const handleFetchMore = useCallback(() => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore, loading]);

  return { animes, loading, error, handleFetchMore, hasMore, page };
};