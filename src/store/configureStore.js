import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/list';
import recentsListReducer from '../reducers/recents-list';

export default () => {
  const store = createStore(
    combineReducers({
      list: listReducer,
      recentsList: recentsListReducer
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
