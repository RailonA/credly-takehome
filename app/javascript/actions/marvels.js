import {
    GET_MARVELS_REQUEST,
    GET_MARVELS_SUCCESS,
    GET_MARVELS_FAILURE,
  } from '../constants/actions';
  
  export const getMarvelsRequest = () => ({
    type: GET_MARVELS_REQUEST,
  });
  
  export const getMarvelsSuccess = (data) => ({
    type: GET_MARVELS_SUCCESS,
    payload: data,
  });
  
  export const getMarvelsFailure = () => ({
    type: GET_MARVELS_FAILURE,
  });
  