import { fetchApi } from "../client/apiClient";

export const fetchAnimeDetails = async (animeId: number) => {
  const query = `
    query ($id: Int) {
      Media(id: $id) {
        id
        title {
          romaji
          native
        }
        description
        coverImage {
          large
        }
        bannerImage
        averageScore
        genres
        format
        episodes
        studios {
          edges {
            node {
              name
            }
          }
        }
        characters {
          edges {
            node {
              name {
                full
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  `;
  const variables = { id: animeId };

  const data = await fetchApi({ query, variables });
  return data.Media;
};
