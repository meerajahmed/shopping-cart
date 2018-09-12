import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/app-router';

import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {getUserInfo} from "./actions/user";

const rootElement =  document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  rootElement);

store.dispatch(getUserInfo());