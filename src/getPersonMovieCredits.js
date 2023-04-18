import { API_KEY } from "./API";

const personId = 1234;

export const getPersonMovieCredits = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("An error occurred while fetching person movie credits.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
