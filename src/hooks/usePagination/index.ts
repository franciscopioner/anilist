import { useState, useCallback } from "react";

export const usePagination = (initialPage = 1) => {
  const [page, setPage] = useState(initialPage);
  const [hasMore, setHasMore] = useState(true);

  const nextPage = useCallback(() => setPage((prev) => prev + 1), []);
  const resetPage = useCallback(() => setPage(1), []);
  const setHasMoreResults = useCallback((value: boolean) => setHasMore(value), []);

  return { page, hasMore, nextPage, resetPage, setHasMoreResults };
};