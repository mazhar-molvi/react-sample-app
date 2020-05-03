import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { responsiveStoreEnhancer } from 'redux-responsive';
import createReducer from './reducers';
let store;
const history = process.env.NODE_ENV === 'test' ? createMemoryHistory() : createBrowserHistory();

export const configureStore = () => {
  const middlewares = Array.prototype.concat(
    [],
    [thunk]
  );

  store = createStore(createReducer(history), applyMiddleware(thunk));
  store.asyncReducers = {};

  return {
    store,
    history
  };
};