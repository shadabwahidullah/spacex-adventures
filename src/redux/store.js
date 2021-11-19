import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketReducer from './RocketsReducer';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  // reducers come here
  rocketReducer,
  missionsReducer,
});

export default createStore(reducer, applyMiddleware(logger, thunk));
