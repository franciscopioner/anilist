import { fetchAnimes } from "./fetchAnimes";
import { Anime } from "../types";

type FetchMoreAnimesProps = {
  search: string;
  format: string;
  page: number;
  hasMore: boolean;
  setAnimes: React.Dispatch<React.SetStateAction<Anime[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
};

export const fetchMoreAnimes = async ({
  search,
  format,
  page,
  hasMore,
  setAnimes,
  setLoading,
  setError,
}: FetchMoreAnimesProps) => {
  if (!hasMore) return;

  setLoading(true);
  setError(null);

  try {
    const data = await fetchAnimes({ search, format, page });
    setAnimes((prev) => (page === 1 ? data.media : [...prev, ...data.media]));
    return data.pageInfo.hasNextPage;
  } catch (err) {
    setError(err instanceof Error ? err.message : "Ocorreu um erro desconhecido.");
  } finally {
    setLoading(false);
  }
};