require('dotenv').config()

import axios from 'axios';

import {
  getMarvelsRequest, getMarvelsSuccess, getMarvelsFailure,
} from '../actions/marvels';

import {
  getCredlyRequest, getCredlySuccess, getCredlyFailure,
} from '../actions/credly';

import { handleError } from './handleError';

const base_url = 'https://sandbox-api.youracclaim.com'
const api_version = 'v1'
const apikey = process.env.APIKEY;
const pvtkey = process.env.PVTKEY;
const authorization = process.env.AUTH;
const org = process.env.ORG;

const ts = new Date().getTime();
const message = ts+pvtkey+apikey;
const hash = CryptoJS.MD5(message);

const requests = {
  marvels: `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=20&offset=20`,
  badge_templates: `${base_url}/${api_version}/organizations/${org}/badge_templates`,
  // credly: `https://sandbox.credly.com/organizations/railon-org/badges`,
  // credly: `https://sandbox-api.credly.com/v1/organizations/railon-org/badges`,

};

export  const requestMarvelsInfo = async (dispatch) => {
    try {
      dispatch(getMarvelsRequest());
      const response = await axios.get(`${requests.marvels}`);
      dispatch(getMarvelsSuccess(response.data.data.results));
    } catch (error) {
      dispatch(getMarvelsFailure);
      handleError(dispatch, 'marvel', error);
    }
  };

  export  const requestCredlyInfo = async (dispatch) => {
    try {
      dispatch(getCredlyRequest());
      const response = await axios.get(`${requests.badge_templates}`,
      { 
        withCredentials: true,
        headers: {
          // withCredentials: 'true',
          // mode: 'no-cors' ,
          // crossDomain: 'true',
          // 'X-Requested-With': 'XMLHttpRequest',
          // 'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': GET,
          // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
          'Accept':' application/json',
          'Authorization': authorization,
          'Content-type': 'application/json',
        }
      },{
        auth: {
        username: authorization,
        password: '',
      }});
      dispatch(getCredlySuccess(response.body));
      // console.log(response);
    } catch (error) {
      dispatch(getCredlyFailure());
      handleError(dispatch, 'credly', error);
    }
  };
