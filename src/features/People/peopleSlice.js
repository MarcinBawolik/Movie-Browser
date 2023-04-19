import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    popularPeople: null,
    status: "initial",
  },
  reducers: {
    fetchPopularPeopleLoading: () => ({
      popularPeople: null,
      status: "loading",
    }),
    fetchPopularPeopleSuccess: (_, { payload: popularPeople }) => ({
      popularPeople,
      status: "success",
    }),
    fetchPopularPeopleError: () => ({
      popularPeople: null,
      status: "error",
    }),
  },
});

export const { fetchPopularPeopleSuccess, fetchPopularPeopleLoading, fetchPopularPeopleError } =
  peopleSlice.actions;

const selectPeopleState = (state) => state.people;

export const selectPopularPeople = (state) => selectPeopleState(state).popularPeople;
export const selectPopularPeopleStatus = (state) =>
  selectPeopleState(state).status;

export default peopleSlice.reducer;
