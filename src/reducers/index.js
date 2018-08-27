import {combineReducers} from 'redux';

import authReducer from './auth';
import filtersReducer from './filters';

export default combineReducers({
  auth: authReducer,
  filters: filtersReducer
})