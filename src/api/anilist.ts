import axios from "axios";

const API_URL = "https://graphql.anilist.co";

interface FetchAnimesParams {
  search?: string;
  format?: string;
  page?: number;
  perPage?: number;
}

export const fetchAnimes = async ({ search, format, page = 1, perPage = 12 }: FetchAnimesParams) => {
  try {
    const response = await axios.post(API_URL, {
      query: `
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
      `,
      variables: { search: search || null, format: format !== "All" ? format : undefined, page, perPage },
    });

    return response.data.data.Page;
  } catch (error) {
    throw new Error(`Erro ao buscar animes. Verifique sua conexão e tente novamente. ERRO: ${error}`);
  }
};
