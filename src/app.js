import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/list';
import { Provider } from 'react-redux';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addItem({ name: 'Milk' }));
store.dispatch(addItem({ name: 'Toast' }));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));
