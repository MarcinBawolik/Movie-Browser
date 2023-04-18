import { call, takeLatest, put, delay } from "redux-saga/effects";
import { fetchPopularPeopleError, fetchPopularPeopleLoading, fetchPopularPeopleSuccess } from "./peopleSlice";
import { getPopularPeople } from "./peopleAPI";

function* fetchPopularPeopleHandler() {
  try {
    yield delay(2000); //just to show loading status
    const people = yield call(getPopularPeople);
    yield put(fetchPopularPeopleSuccess(people));
  } catch (error) {
    yield put(fetchPopularPeopleError());
  }
}

export function* popularPeopleSaga() {
  yield takeLatest(fetchPopularPeopleLoading.type, fetchPopularPeopleHandler);
}
