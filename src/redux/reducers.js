import { combineReducers } from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import { connectRouter } from 'connected-react-router';
import servicessReducer from './servicess';

const createReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    servicessReducer,
    browser: createResponsiveStateReducer({
      mobile: 320,
      tablet: 768,
      desktop: 1024
    })
  });
};

export default createReducer;
