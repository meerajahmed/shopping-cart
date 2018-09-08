import {combineReducers} from 'redux';

import authReducer from './auth';
import userReducer from './user';
import booksReducer from './books';
import searchReducer from './search';
import cartReducer from './cart';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  books: booksReducer,
  search: searchReducer,
  cart: cartReducer
})