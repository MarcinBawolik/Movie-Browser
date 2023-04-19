import { API_KEY, API_URL } from "./API";

export const searchPeople = async (query) => {
  try {
    const response = await fetch(`${API_URL}search/person?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error("An error occurred while searching people.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};