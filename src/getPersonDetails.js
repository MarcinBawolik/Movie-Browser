import { API_KEY } from "./API";
const personId = 123;

export const getPersonDetails = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("An error occurred while fetching person details.");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
