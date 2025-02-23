const BASE_URL = "https://graphql.anilist.co";

interface FetchApiParams {
  query: string;
  variables?: Record<string, any>;
}

export const fetchApi = async ({ query, variables = {} }: FetchApiParams) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} ${response.statusText}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("Erro na API:", error);
    throw new Error("Erro ao realizar a consulta na API");
  }
};
