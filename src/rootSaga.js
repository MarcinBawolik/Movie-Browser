import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./features/Movies/moviesSaga";
import { popularPeopleSaga } from "./features/People/peopleSaga";

export default function* rootSaga() {
  yield all([popularMoviesSaga(), popularPeopleSaga()]);
}
