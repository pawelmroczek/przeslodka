import {all} from "redux-saga/effects"
import { cakesSaga } from "./features/cakeSaga"


export default function* rootSaga() {
  yield all([
    cakesSaga(),
  ])
}
