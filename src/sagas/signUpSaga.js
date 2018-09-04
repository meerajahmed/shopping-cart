import { take, put, call, actionChannel } from 'redux-saga/effects'

import signUpAPI from "../api/signUpAPI";
import {setAuthToken, SIGN_UP} from "../actions/auth";
import {setUserInfo} from "../actions/user";

export default function* signUpSaga() {
  const signUpChannel = yield actionChannel(SIGN_UP);
  while (true) {
    try{
      const {payload: {user}} = yield take(signUpChannel);
      const {data, headers} = yield call(signUpAPI, user);
      yield put(setAuthToken(headers['x-auth']));
      sessionStorage.setItem('authToken',headers['x-auth']);
      yield put(setUserInfo(data));
    } catch(error) {
      console.log(error);
    }
  }
}

