import {
    GET_MARVELS_REQUEST,
    GET_MARVELS_SUCCESS,
    GET_MARVELS_FAILURE,
  } from '../constants/actions';
  
  const initialState = {
    marvelsCollection: [],
  };
  
  const marvelReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_MARVELS_REQUEST:
        return { ...state, loading: true };
      case GET_MARVELS_SUCCESS:
        return { ...state, marvelsCollection: action.payload, loading: false };
      case GET_MARVELS_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default marvelReducer;
  