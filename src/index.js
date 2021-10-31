import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './containers/app/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import config from 'react-global-configuration';
import GlobalConfig from './config';

config.set(GlobalConfig);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your store to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
