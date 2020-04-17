import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import marketStore from './store';

ReactDOM.render(
  <Provider store={marketStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);