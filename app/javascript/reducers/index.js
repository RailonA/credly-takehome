import { combineReducers } from 'redux';
import marvelReducer from './marvelReducer';

const rootReducer = combineReducers({
  marvel: marvelReducer,
});

export default rootReducer;
