import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../localStorage";

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchMovies: [],
    status: "initial",
    searchText: getLocalStorage("moviesSearch"),
    page: 1,
  },
  reducers: {
    loadSearchMovies: (state) => {
      state.status = "loading";
    },
    loadSearchMoviesSuccess: (state, { payload: searchMovies }) => {
      state.searchMovies = {
        results: searchMovies,
        total_results: searchMovies.length,
      };
      state.status = "success";
    },

    loadSearchMoviesError: (state) => {
      state.status = "error";
    },
    setMoviesPageFirst: (state) => {
      state.page = 1;
    },
    changeMoviesSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    removeSearchMovies: (state) => {
      state.searchMovies = [];
      state.status = "initial";
      state.page = null;
    },
    fetchSearchMovies: () => {},
  },
});

export const {
      loadSearchMovies,
      loadSearchMoviesSuccess,
  loadSearchMoviesError,
      setMoviesPageFirst,
      changeMoviesSearchText,
      removeSearchMovies,
        fetchSearchMovies,
} = searchMoviesSlice.actions;

const selectSearchMoviesState = (state) => state.searchMovies;
        export const selectSearchMovies = (state) =>
  selectSearchMoviesState(state)?.searchMovies.results || {};
        export const selectMoviesTotalResults = (state) =>
  selectSearchMoviesState(state).searchMovies.total_results;
        export const selectSearchMoviesText = (state) =>
  selectSearchMoviesState(state).searchText;
        export const selectSearchMoviesStatus = (state) =>
  selectSearchMoviesState(state).status;


export default searchMoviesSlice.reducer;
