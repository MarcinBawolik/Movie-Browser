import { createSlice } from "@reduxjs/toolkit";

const popularMoviesSlice = createSlice({
  name: "popularMovies",
  initialState: {
    movies: null,
    status: "initial",
  },
  reducers: {
    fetchMoviesLoading: () => ({
      movies: null,
      status: "loading",
    }),
    fetchMoviesSuccess: (_, { payload: movies }) => ({
      movies,
      status: "success",
    }),
    fetchMoviesError: () => ({
      movies: null,
      status: "error",
    }),
  },
});

export const { fetchMoviesSuccess, fetchMoviesLoading, fetchMoviesError } =
  popularMoviesSlice.actions;

const selectPopularMoviesState = (state) => state.popularMovies;

export const selectMovies = (state) => selectPopularMoviesState(state).movies;
export const selectMoviesStatus = (state) =>
  selectPopularMoviesState(state).status;

export default popularMoviesSlice.reducer;
