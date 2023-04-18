import { call, takeLatest, put, delay } from "redux-saga/effects";
import { fetchPeopleError, fetchPeopleLoading, fetchPeopleSuccess } from "./popularPeopleSlice";
import { popularPeopleAPI } from "./popularPeopleAPI";

function* fetchPopularPeopleHandler() {
  try {
    yield delay(2000); //just to show loading status
    const people = yield call(popularPeopleAPI);
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(fetchPeopleLoading.type, fetchPopularPeopleHandler);
}
