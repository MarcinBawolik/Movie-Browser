import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovies: null,
    status: "initial",
  },
  reducers: {
    fetchPopularMoviesLoading: () => ({
      popularMovies: null,
      status: "loading",
    }),
    fetchPopularMoviesSuccess: (_, { payload: popularMovies }) => ({
      popularMovies,
      status: "success",
    }),
    fetchPopularMoviesError: () => ({
      popularMovies: null,
      status: "error",
    }),
  },
});

export const {
  fetchPopularMoviesSuccess,
  fetchPopularMoviesLoading,
  fetchPopularMoviesError,
} = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;

export const selectPopularMovies = (state) =>
  selectMoviesState(state).popularMovies;
export const selectPopularMoviesStatus = (state) =>
  selectMoviesState(state).status;

export default moviesSlice.reducer;
