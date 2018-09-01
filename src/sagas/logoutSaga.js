import { take, put, call, actionChannel } from 'redux-saga/effects'


import setCurrentUserInfo from "../actions/setCurrentUserInfo";
import {LOGIN, setAuthToken} from "../actions/auth";
import loginAPI from "../api/loginAPI";

export default function* currentUserSaga() {
  const loginChannel = yield actionChannel(LOGIN);
  while (true) {
    try{
      const {payload: {user}} = yield take(loginChannel);
      const {data, headers} = yield call(loginAPI, user);
      yield put(setAuthToken(headers['x-auth']));
      sessionStorage.setItem('authToken',headers['x-auth']);
      yield put(setCurrentUserInfo(data));
    } catch(error) {
      console.log(error);
    }
  }
}

