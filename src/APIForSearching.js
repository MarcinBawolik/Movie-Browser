import { API_KEY, API_URL } from "./API";

export const searchMovie = async (searchText) => {
  let page = 1;
  let allResults = [];
  let totalResults = 0;
  let totalPages = 0;

  do {
    const url = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();

    allResults = [...allResults, ...data.results];
    totalResults = data.total_results;
    totalPages = data.total_pages;

    page++;
  } while (page <= totalPages);

  return allResults;
};

export const searchPeople = async (searchText) => {
  let page = 1;
  let allResults = [];
  let totalResults = 0;
  let totalPages = 0;

  do {
    const url = `${API_URL}/search/person?api_key=${API_KEY}&language=en-US&page=${page}&query=${searchText}`;
    const response = await fetch(url);
    const data = await response.json();

    allResults = [...allResults, ...data.results];
    totalResults = data.total_results;
    totalPages = data.total_pages;

    page++;
  } while (page <= totalPages);

  return allResults;
};
