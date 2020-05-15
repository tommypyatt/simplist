import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/list';

export default () => {
  const store = createStore(combineReducers({
    list: listReducer
  }));

  return store;
};
