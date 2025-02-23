import { fetchApi } from "../client/apiClient";

interface FetchAnimesParams {
  search?: string;
  format?: string;
  page?: number;
  perPage?: number;
}

export const fetchAnimes = async ({ search, format, page = 1, perPage = 12 }: FetchAnimesParams) => {
  const query = `
    query ($search: String, $format: MediaFormat, $page: Int, $perPage: Int) {
      Page(page: $page, perPage: $perPage) {
        media(search: $search, format: $format, type: ANIME) {
          id
          title { romaji }
          coverImage { large }
          format
          averageScore
          genres
        }
        pageInfo { hasNextPage }
      }
    }
  `;

  const variables = { search, format, page, perPage };

  const data = await fetchApi({ query, variables });
  return data.Page;
};
