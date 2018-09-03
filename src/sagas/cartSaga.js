import { take, put, call, takeEvery, select, all } from 'redux-saga/effects'

import {
  ADD_TO_CART, addCartItem, addCartItems, REMOVE_FROM_CART, removeCartItem, UPDATE_CART_ITEM,
  updateCart
} from "../actions/cart";
import {getAuthToken} from "../selectors/auth";
import {addToCartAPI, fetchCartAPI, removeFromCartAPI, updateCartAPI} from "../api/cartAPI";
import {SET_USER_INFO} from "../actions/user";

function* handleAddToCart(data) {
  try{
    const {payload: {book: {_id: bookId}, quantity}} = data;
    const authToken = yield select(getAuthToken);
    const cartItem = yield call(addToCartAPI, {bookId, quantity, authToken});
    yield put(addCartItem(cartItem));
    const cartItems = yield call(fetchCartAPI, authToken);
    yield put(addCartItems(cartItems));
  } catch(error) {
    console.log(error);
  }
}

function* updateCartItem(cartItem) {
  try{
    const {payload: {cartId, quantity}} = cartItem;
    const authToken = yield select(getAuthToken);
    yield call(updateCartAPI, {cartId, quantity, authToken});
    yield put(updateCart(cartId, quantity));
  } catch(error) {
    console.log(error);
  }
}

function* handleRemoveFromCart(cartItem) {
  try{
    const {payload: {cartId}} = cartItem;
    const authToken = yield select(getAuthToken);
    yield call(removeFromCartAPI, {cartId, authToken});
    yield put(removeCartItem(cartId));
  } catch(error) {
    console.log(error);
  }
}

function* fetchCart() {
  try{
    const authToken = yield select(getAuthToken);
    const cartItems = yield call(fetchCartAPI, authToken);
    yield put(addCartItems(cartItems));
  } catch(error) {
    console.log(error);
  }
}

export default function* cartSaga() {
  yield all([
    takeEvery(ADD_TO_CART, handleAddToCart),
    takeEvery(REMOVE_FROM_CART, handleRemoveFromCart),
    takeEvery(SET_USER_INFO, fetchCart),
    takeEvery(UPDATE_CART_ITEM, updateCartItem)
  ]);
}



