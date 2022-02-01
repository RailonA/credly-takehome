require('dotenv').config()

import axios from 'axios';

import {
  getMarvelsRequest, getMarvelsSuccess, getMarvelsFailure,
} from '../actions/marvels';
import { handleError } from './handleError';

const apikey = process.env.APIKEY;
const pvtkey = process.env.PVTKEY;

const ts = new Date().getTime();
const message = ts+pvtkey+apikey;
const hash = CryptoJS.MD5(message);

const requests = {
  marvels: `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=20&offset=20`,
};


export  const requestMarvelsInfo = async (dispatch) => {
    try {
      dispatch(getMarvelsRequest());
      const response = await axios.get(`${requests.marvels}`);
      dispatch(getMarvelsSuccess(response.data));
    } catch (error) {
      dispatch(getMarvelsFailure);
      handleError(dispatch, 'marvel', error);
    }
  };
