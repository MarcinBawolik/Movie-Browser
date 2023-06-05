import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "./features/Movies/moviesSlice";
import peopleReducer from "./features/People/peopleSlice";
import searchMoviesReducer from "./SearchMoviesAndPeople/MoviesList/searchMoviesSlice";
import searchPeopleReducer from "./SearchMoviesAndPeople/PeopleList/searchPeopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    searchMovies: searchMoviesReducer,
    searchPeople: searchPeopleReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
