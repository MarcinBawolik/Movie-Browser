import { API_KEY, API_URL } from "../API";

export async function popularMoviesAPI() {
  try {
    const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Wystąpił błąd podczas pobierania postaci.");
    }
    const data = await response.json();
    const results = data.results
    return results;
  } catch (error) {
    console.error(error);
  }
}
