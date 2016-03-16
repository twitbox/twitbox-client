import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import twitter from './twitter';

const rootReducer = combineReducers({
  twitter,
  routing: routerReducer
});

export default rootReducer;