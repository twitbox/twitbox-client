import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import placeholder from './placeholder';

const rootReducer = combineReducers({
  placeholder,
  routing: routerReducer
});

export default rootReducer;