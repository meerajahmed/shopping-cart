import { take, put, call, actionChannel } from 'redux-saga/effects'

import getUserInfoAPI from "../api/getUserInfoAPI";
import {setAuthToken} from "../actions/auth";
import {GET_USER_INFO, setUserInfo} from "../actions/user";

export default function* userSaga() {
  const userChannel = yield actionChannel(GET_USER_INFO);
  while (true) {
    yield take(userChannel);
    try{
      const authToken = sessionStorage.getItem('authToken');
      if(authToken) {
        const data = yield call(getUserInfoAPI, authToken);
        yield put(setAuthToken(authToken));
        yield put(setUserInfo(data));
      }
    } catch(error) {
      sessionStorage.removeItem('authToken');
      console.log(error);
    }

  }
}

