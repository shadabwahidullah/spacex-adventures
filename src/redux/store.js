import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rocketReducer from './RocketsReducer';

const reducer = combineReducers({
  // reducers come here
  rocketReducer,
});

export default createStore(reducer, applyMiddleware(logger));
