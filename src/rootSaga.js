import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./PopularMovies/popularMoviesSaga";
import { popularPeopleSaga } from "./PopularPeople/popularPeopleSaga";

export default function* rootSaga() {
  yield all([popularMoviesSaga(), popularPeopleSaga()]);
}
