import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./features/Movies/moviesSaga";
import { popularPeopleSaga } from "./features/People/peopleSaga";
import { searchMoviesSaga } from "./SearchMoviesAndPeople/MoviesList/searchMoviesSaga";
import { searchPeopleSaga } from "./SearchMoviesAndPeople/PeopleList/searchPeopleSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    popularPeopleSaga(),
    searchMoviesSaga(),
    searchPeopleSaga(),
  ]);
}
