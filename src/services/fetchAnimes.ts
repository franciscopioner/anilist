export async function fetchAnimes(search = "", format?: string) {
  const query = `
  query ($search: String, $format: MediaFormat) {
    Page (perPage: 12) {
      media (search: $search, format: $format) {
        id
        title { romaji }
        coverImage { large }
        averageScore
        format
        genres
      }
    }
  }
`;

  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { search, format },
    }),
  });

  const { data } = await response.json();
  return data.Page.media;
}