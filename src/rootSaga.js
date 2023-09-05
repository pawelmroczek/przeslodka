import {all} from "redux-saga/effects"
import { cakesSaga } from "./cakeSaga"


export default function* rootSaga() {
  yield all([
    cakesSaga(),
  ])
}
