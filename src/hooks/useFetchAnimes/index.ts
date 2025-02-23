import { useState, useEffect, useCallback } from "react";
import { fetchAnimes, fetchAnimesByIds } from "@api/anilist";
import { Anime } from "@types";
import { useAppContext } from "@context/AppContext";

export const useFetchAnimes = (search: string, format: string) => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const { favoriteContext } = useAppContext();
  const { favorites } = favoriteContext;
  const [cache, setCache] = useState<Record<string, { pages: Record<number, Anime[]>; hasMore: boolean; currentPage: number }>>({});

  const currentPage = cache[`${search}-${format}`]?.currentPage || 1;

  const fetchData = useCallback(async () => {
    const cacheKey = `${search}-${format}`;

    if (cache[cacheKey] && cache[cacheKey].pages[currentPage]) {
      const cachedAnimes = Object.values(cache[cacheKey].pages).flat();
      setAnimes(cachedAnimes);
      setHasMore(cache[cacheKey].hasMore);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (format === "FAVORITES") {
        const data = await fetchAnimesByIds(favorites);
        setAnimes(data.media);
        setHasMore(false);
        setCache((prev) => ({
          ...prev,
          [cacheKey]: { pages: { 1: data.media }, hasMore: false, currentPage: 1 },
        }));
      } else {
        const data = await fetchAnimes({ search, format, page: currentPage });
        const newAnimes = data.media;
        setAnimes((prev) => (currentPage === 1 ? newAnimes : [...prev, ...newAnimes]));
        setHasMore(data.pageInfo.hasNextPage);
        setCache((prev) => ({
          ...prev,
          [cacheKey]: {
            pages: { ...prev[cacheKey]?.pages, [currentPage]: newAnimes },
            hasMore: data.pageInfo.hasNextPage,
            currentPage: currentPage,
          },
        }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
    } finally {
      setLoading(false);
    }
  }, [search, format, currentPage, favorites, cache]);

  useEffect(() => {
    const cacheKey = `${search}-${format}`;
    if (format === "FAVORITES") {
      fetchAnimesByIds(favorites).then((data) => {
        setCache((prev) => ({
          ...prev,
          [cacheKey]: { pages: { 1: data.media }, hasMore: false, currentPage: 1 },
        }));
        setAnimes(data.media);
      });
    }
  }, [favorites, format, search]);

  useEffect(() => {
    fetchData();
  }, [search, format, currentPage]);

  const handleFetchMore = useCallback(() => {
    if (hasMore && !loading) {
      const cacheKey = `${search}-${format}`;
      setCache((prev) => ({
        ...prev,
        [cacheKey]: {
          ...prev[cacheKey],
          currentPage: currentPage + 1,
        },
      }));
    }
  }, [hasMore, loading, search, format, currentPage]);

  return { animes, loading, error, handleFetchMore, hasMore };
};