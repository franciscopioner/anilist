export async function fetchAnimeDetails(animeId: number) {
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

  try {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: { id: animeId },
      }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const { data } = await response.json();
    return data.Media;
  } catch (error) {
    console.error("Erro ao buscar detalhes do anime:", error);
    throw error;
  }
}