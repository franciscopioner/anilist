import { renderHook, act } from '@testing-library/react';
import { usePagination } from '../';

describe('usePagination', () => {
  it('should initialize with default page 1', () => {
    const { result } = renderHook(() => usePagination());

    expect(result.current.page).toBe(1);
    expect(result.current.hasMore).toBe(true);
  });

  it('should increment page', () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.page).toBe(2);
  });

  it('should reset page', () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.nextPage();
      result.current.resetPage();
    });

    expect(result.current.page).toBe(1);
  });

  it('should set hasMore', () => {
    const { result } = renderHook(() => usePagination());

    act(() => {
      result.current.setHasMoreResults(false);
    });

    expect(result.current.hasMore).toBe(false);
  });
});