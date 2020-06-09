/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const loginUser = (user) => (dispatch) => {
  axios
    .post('/api/users/login', user)
    .then(() => dispatch({
      type: SET_CURRENT_USER
    }))
    .catch((err) => dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    }));
};


export const registerUser = () => {
  console.log('hehe');
};
