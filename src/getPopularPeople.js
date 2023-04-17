import { API_KEY } from "./API";

export const getPopularPeople = async () => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
