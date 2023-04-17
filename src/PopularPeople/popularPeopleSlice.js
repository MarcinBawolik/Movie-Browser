import { createSlice } from "@reduxjs/toolkit";

const popularPeopleSlice = createSlice({
  name: "popularPeople",
  initialState: {
    people: null,
    status: "initial",
  },
  reducers: {
    fetchPeopleLoading: () => ({
      people: null,
      status: "loading",
    }),
    fetchPeopleSuccess: (_, { payload: people }) => ({
      people,
      status: "success",
    }),
    fetchPeopleError: () => ({
      people: null,
      status: "error",
    }),
  },
});

export const { fetchPeopleSuccess, fetchPeopleLoading, fetchPeopleError } =
  popularPeopleSlice.actions;

const selectPopularPeopleState = (state) => state.popularPeople;

export const selectPeople = (state) => selectPopularPeopleState(state).people;
export const selectPeopleStatus = (state) =>
  selectPopularPeopleState(state).status;

export default popularPeopleSlice.reducer;
