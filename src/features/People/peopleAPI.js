import { API_KEY, API_URL } from "../../API";

export const getPopularPeople = async (page) => {
  try {
    const response = await fetch(
      `${API_URL}person/popular?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("An error occurred while fetching popular people.");
    }
    const data = await response.json();
    const results = data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonDetails = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  try {
    const response = await fetch(`${API_URL}person/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("An error occurred while fetching person details.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPersonCredits = async ({ queryKey }) => {
  const [, { id }] = queryKey;

  const response = await fetch(
    `${API_URL}person/${id}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
