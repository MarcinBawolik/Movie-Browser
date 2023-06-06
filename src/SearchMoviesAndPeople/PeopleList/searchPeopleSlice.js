import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "../../localStorage";

const searchPeopleSlice = createSlice({
  name: "searchPeople",
  initialState: {
    searchPeople: [],
    status: "initial",
    searchText: getLocalStorage("peopleSearch"),
    page: 1,
  },
  reducers: {
    loadSearchPeople: (state) => {
      state.status = "loading";
    },
    loadSearchPeopleSuccess: (state, { payload: searchPeople }) => {
      state.searchPeople = {
        results: searchPeople,
        total_results: searchPeople.length,
      };
      state.status = "success";
    },
    loadSearchPeopleError: (state) => {
      state.status = "error";
    },
    changePeopleSearchText: (state, { payload: searchText }) => {
      state.searchText = searchText;
    },
    changeSearchPeoplePage: (state, { payload: page }) => {
      state.page = page;
    },
    setPeoplePageFirst: (state) => {
      state.page = 1;
    },
    removeSearchPeople: (state) => {
      state.searchPeople = [];
      state.status = "initial";
    },
    fetchSearchPeople: () => {},
  },
});

export const {
  loadSearchPeople,
  loadSearchPeopleSuccess,
  loadSearchPeopleError,
  setPeoplePageFirst,
  changePeopleSearchText,
  removeSearchPeople,
  fetchSearchPeople,
} = searchPeopleSlice.actions;

const selectSearchPeopleState = (state) => state.searchPeople;

export const selectSearchPeople = (state) =>
  selectSearchPeopleState(state).searchPeople.results;
export const selectPeopleTotalResults = (state) =>
  selectSearchPeopleState(state).searchPeople.total_results;
export const selectPeopleSearchText = (state) =>
  selectSearchPeopleState(state).searchText;
export const selectSearchPeopleStatus = (state) =>
  selectSearchPeopleState(state).status;
export default searchPeopleSlice.reducer;
