import { API_KEY, API_URL } from "../../API";

export const getPopularPeople = async () => {
    try {
      const response = await fetch(`${API_URL}person/popular?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("An error occurred while fetching popular people.");
      }
      const data = await response.json();
      const results = data.results
      return results;
    } catch (error) {
      console.error(error);
    }
  };

  export const getPersonDetails = async (personId) => {
    try {
      const response = await fetch(
        `${API_URL}person/${personId}?api_key=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("An error occurred while fetching person details.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  
  export const getPersonMovieCredits = async (personId) => {
    try {
      const response = await fetch(`${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("An error occurred while fetching person movie credits.");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };