import { take, put, call, actionChannel } from 'redux-saga/effects'

import {LOGIN, setAuthToken} from "../actions/auth";
import loginAPI from "../api/loginAPI";
import {setUserInfo} from "../actions/user";

export default function* loginSaga() {
  const loginChannel = yield actionChannel(LOGIN);
  while (true) {
    try{
      const {payload: {user}} = yield take(loginChannel);
      const {data, headers} = yield call(loginAPI, user);
      yield put(setAuthToken(headers['x-auth']));
      sessionStorage.setItem('authToken',headers['x-auth']);
      yield put(setUserInfo(data));
    } catch(error) {
      console.log(error);
    }
  }
}

