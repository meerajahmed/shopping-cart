import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Counter from './containers/counter';
import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root'));