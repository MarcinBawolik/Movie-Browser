import { API_KEY, API_URL } from "../../API";

export async function getPopularMovies(page) {
  try {
    const response = await fetch(
      `${API_URL}movie/popular?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Wystąpił błąd podczas pobierania popularnych filmów.");
    }
    const data = await response.json();
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getMovieDetails = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  try {
    const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("An error occurred while fetching movie details.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${API_URL}movie/${id}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
