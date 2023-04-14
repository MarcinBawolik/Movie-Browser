import { all } from "redux-saga/effects"
import { popularMoviesSaga } from "./PopularMovies/popularMoviesSaga";

export default function* rootSaga() {
    yield all ([popularMoviesSaga()]);
}