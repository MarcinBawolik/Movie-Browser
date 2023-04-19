import { API_KEY, API_URL } from "../../API";

export async function getPopularMovies() {
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

  export const getMovieDetails = async (movieId) => {
    try {
      const response = await fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("An error occurred while fetching movie details.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export const getMovieCredits = async (movieId) => {
    try {
      const response = await fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("An error occurred while fetching movie credits.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }