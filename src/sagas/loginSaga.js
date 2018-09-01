import { take, put, call, actionChannel } from 'redux-saga/effects'

import signUpAPI from "../api/signUpAPI";
import setCurrentUserInfo from "../actions/setCurrentUserInfo";
import {setAuthToken, SIGN_UP} from "../actions/auth";

export default function* currentUserSaga() {
  const signUpChannel = yield actionChannel(SIGN_UP);
  while (true) {
    try{
      const {payload: {user}} = yield take(signUpChannel);
      console.log(user);
      const {data, headers} = yield call(signUpAPI, user);
      yield put(setAuthToken(headers['x-auth']));
      sessionStorage.setItem('authToken',headers['x-auth']);
      yield put(setCurrentUserInfo(data));
    } catch(error) {
      console.log(error);
    }
  }
}

