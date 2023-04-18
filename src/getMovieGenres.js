import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "./API";

const getGenres = async () => {
  try {
    const response = await fetch(
      `${API_URL}genre/movie/list?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error("An error occurred while fetching genres.");
    }
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.error(error);
  }
};

export const Genres = ({ children }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await getGenres();
      setGenres(data);
    };
    fetchGenres();
  }, []);

  return children({ genres });
};
