import { API_KEY } from "../API";
import { API_URL } from "../API";

export const popularPeopleAPI = async () => {
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
