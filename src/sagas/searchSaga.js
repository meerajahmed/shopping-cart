import {delay} from 'redux-saga'
import {call, put, takeLatest} from 'redux-saga/effects'
import {CATEGORY_CHANGE, SEARCH_INPUT_CHANGE, setSearchCategory, setSearchText} from "../actions/search";

function* handleSearchChange({payload: {searchText}}) {
  yield call(delay, 1000); // debounce by 1s
  yield put(setSearchText(searchText));
}

export default function* watchInput() {
  yield takeLatest(SEARCH_INPUT_CHANGE, handleSearchChange);
}