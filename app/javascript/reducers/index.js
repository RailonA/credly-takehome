import { combineReducers } from 'redux';
import marvelReducer from './marvelReducer';
import credlyReducer from './credlyReducer';

const rootReducer = combineReducers({
  marvel: marvelReducer,
  credly: credlyReducer,
});

export default rootReducer;
