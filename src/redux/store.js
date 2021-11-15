import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const reducer = combineReducers({
  // reducers come here
});

export default createStore(reducer, applyMiddleware(logger));
