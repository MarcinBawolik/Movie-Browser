import { API_KEY } from "./API";
const movieId = 550;

export const getMovieCredits = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("An error occurred while fetching movie credits.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
