import { take, put, call, actionChannel } from 'redux-saga/effects'

import booksAPI from "../api/booksAPI";

import {GET_BOOKS, setBooks} from "../actions/books";

export default function* booksSaga() {
  const booksChannel = yield actionChannel(GET_BOOKS);
  while (true) {
    yield take(booksChannel);
    try{
      const books = yield call(booksAPI);
      yield put(setBooks(books));
    } catch(error) {
      console.log(error);
    }
  }
}

