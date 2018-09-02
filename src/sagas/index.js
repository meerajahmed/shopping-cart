import {fork, all} from 'redux-saga/effects';
import userSaga from "./userSaga";
import signUpSaga from "./signUpSaga";
import loginSaga from "./loginSaga";
import logoutSaga from "./logoutSaga";
import booksSaga from "./booksSaga";
import searchSaga from "./searchSaga";
import cartSaga from "./cartSaga";

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(signUpSaga),
    fork(loginSaga),
    fork(logoutSaga),
    fork(booksSaga),
    fork(searchSaga),
    fork(cartSaga)
  ]);
}