import { call, takeLatest, put, delay } from "redux-saga/effects";
import { fetchMoviesError, fetchMoviesLoading, fetchMoviesSuccess } from "./popularMoviesSlice";
import { popularMoviesAPI } from "./popularMoviesAPI";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(2000); //just to show loading status
    const movies = yield call(popularMoviesAPI);
    yield put(fetchMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchMoviesError());
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(fetchMoviesLoading.type, fetchPopularMoviesHandler);
}
