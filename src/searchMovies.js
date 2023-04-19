import { API_KEY, API_URL } from "./API";

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${API_URL}search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error("An error occurred while searching movies.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
