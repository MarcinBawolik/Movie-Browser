import { call, takeLatest, put, delay } from "redux-saga/effects";
import { fetchPopularMoviesError, fetchPopularMoviesLoading, fetchPopularMoviesSuccess } from "./moviesSlice";
import { getPopularMovies } from "./moviesAPI";

function* fetchPopularMoviesHandler() {
  try {
    yield delay(2000); //just to show loading status
    const movies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(movies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
  }
}

export function* popularMoviesSaga() {
  yield takeLatest(fetchPopularMoviesLoading.type, fetchPopularMoviesHandler);
}
