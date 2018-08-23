import {fork, takeEvery} from 'redux-saga/effects';
import {INCREMENT_ASYNC} from "../actions/incrementAsync";
import increaseAsync from "./increaseAsync";

export default function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, increaseAsync);
}