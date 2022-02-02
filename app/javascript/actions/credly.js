import {
    GET_CREDLY_REQUEST,
    GET_CREDLY_SUCCESS,
    GET_CREDLY_FAILURE,
  } from '../constants/actions';
  
  export const getCredlyRequest = () => ({
    type: GET_CREDLY_REQUEST,
  });
  
  export const getCredlySuccess = (data) => ({
    type: GET_CREDLY_SUCCESS,
    payload: data,
  });
  
  export const getCredlyFailure = () => ({
    type: GET_CREDLY_FAILURE,
  });
  
  