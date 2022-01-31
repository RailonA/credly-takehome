import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import marvelReducer from './marvelReducer';

const rootReducer = combineReducers({
  filterReducer,
  marvelReducer,
});

export default rootReducer;
