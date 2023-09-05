import { takeLatest, call, put, delay } from "redux-saga/effects";

import {
  fetchCakes,
  setCakes,
  setCategories,
  setSweets,
} from "./cakeSlice";

import { getCakes } from "./getCakes";

function* fetchCakesHandler() {
  try {
    yield delay(1000);
    const baza = yield call(getCakes);
    yield put(setCakes(baza.torty));
    yield put(setCategories(baza.kategorie));
    yield put(setSweets(baza.slodkiStol));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

export function* cakesSaga() {
  yield takeLatest(fetchCakes.type, fetchCakesHandler);
}
