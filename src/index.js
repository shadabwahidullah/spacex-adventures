import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './redux/store';

ReactDOM.render(
  <Provider store={configureStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
    {' '}
  </Provider>,
  document.getElementById('root'),
);
