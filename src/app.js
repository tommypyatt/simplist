import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/list';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addItem({ name: 'Some MILSCH' }));

ReactDOM.render(<AppRouter />, document.getElementById('app'));
