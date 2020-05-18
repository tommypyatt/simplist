import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  localStorage.setItem('appState', JSON.stringify(store.getState()));
});

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
