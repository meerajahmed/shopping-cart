import { take, put, call  } from 'redux-saga/effects'

import {GET_CURRENT_USER_INFO} from "../actions/getCurrentUserInfo";
import getUserInfoAPI from "../api/getUserInfoAPI";
import setCurrentUserInfo from "../actions/setCurrentUserInfo";
import {setAuthToken} from "../actions/auth";

export default function* currentUserSaga() {
  yield take(GET_CURRENT_USER_INFO);
  const authToken = sessionStorage.getItem('authToken');
  if(authToken) {
    const data = yield call(getUserInfoAPI, authToken);
    yield put(setAuthToken(authToken));
    yield put(setCurrentUserInfo(data));
  }
}

