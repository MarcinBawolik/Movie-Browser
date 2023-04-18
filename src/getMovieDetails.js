import { API_KEY } from "./API";
const movieId = 550;

export const getMovieDetails = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("An error occurred while fetching movie details.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


