import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import cakesReducer from "./features/cakeSlice"
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cakes: cakesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
