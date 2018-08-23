import {put, takeEvery} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import increment from "../actions/increment";

export default function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}
