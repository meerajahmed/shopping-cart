import { take, put, call, actionChannel } from 'redux-saga/effects'

import getUserInfoAPI from "../api/getUserInfoAPI";
import {setAuthToken} from "../actions/auth";
import {GET_USER_INFO, setUserInfo} from "../actions/user";
import {GET_BOOKS} from "../actions/books";

export default function* booksSaga() {
  const booksChannel = yield actionChannel(GET_BOOKS);
  while (true) {
    yield take(booksChannel);
    try{
      const authToken = sessionStorage.getItem('authToken');
      if(authToken) {
        const data = yield call(getUserInfoAPI, authToken);
        yield put(setAuthToken(authToken));
        yield put(setUserInfo(data));
      }
    } catch(error) {
      console.log(error);
    }

  }
}

