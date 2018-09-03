import { take, put, call, select, actionChannel } from 'redux-saga/effects'

import {LOGOUT, removeAuthToken} from "../actions/auth";
import logoutAPI from "../api/logoutAPI";
import {getAuthToken} from "../selectors/auth";
import {removeUserInfo} from "../actions/user";
import {removeCartItems} from "../actions/cart";

export default function* logoutSaga() {
  const logoutChannel = yield actionChannel(LOGOUT);
  while (true) {
    try{
      yield take(logoutChannel);
      const authToken = yield select(getAuthToken);
      yield call(logoutAPI, authToken);
      sessionStorage.removeItem('authToken');
      yield put(removeAuthToken());
      yield put(removeUserInfo());
      yield put(removeCartItems());
    } catch(error) {
      console.log(error);
    }
  }
}

