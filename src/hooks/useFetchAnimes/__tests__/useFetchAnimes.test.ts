import { renderHook, act } from "@testing-library/react";
import { useFetchAnimes } from "../index";
import { fetchAnimes } from "../../../api/anilist";

jest.mock("../../../api/anilist", () => ({
  fetchAnimes: jest.fn(),
}));

describe("useFetchAnimes", () => {
  it("should reset page and animes when format changes", async () => {
    const mockDataTV = {
      media: [{ id: 1, title: { romaji: "Anime 1" } }],
      pageInfo: { hasNextPage: true },
    };

    const mockDataMovie = {
      media: [],
      pageInfo: { hasNextPage: true },
    };

    (fetchAnimes as jest.Mock)
      .mockResolvedValueOnce(mockDataTV)
      .mockResolvedValueOnce(mockDataMovie);

    const { result, rerender } = renderHook(
      ({ search, format }) => useFetchAnimes(search, format),
      {
        initialProps: { search: "search", format: "TV" },
      }
    );

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.animes).toEqual(mockDataTV.media);

    await act(async () => {
      rerender({ search: "search", format: "MOVIE" });
    });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.animes).toEqual([]);
    expect(result.current.page).toBe(1);
  });
});
