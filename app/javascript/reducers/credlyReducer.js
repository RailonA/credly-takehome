import {
    GET_CREDLY_REQUEST,
    GET_CREDLY_SUCCESS,
    GET_CREDLY_FAILURE,
  } from '../constants/actions';
  
  const initialState = {
    credlyCollection: [],
  };
  
  const credlyReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CREDLY_REQUEST:
        return { ...state, loading: true };
      case GET_CREDLY_SUCCESS:
        return { ...state, credlyCollection: action.payload, loading: false };
      case GET_CREDLY_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default credlyReducer;
  