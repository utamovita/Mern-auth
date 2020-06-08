/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';

import { GET_ERRORS, USER_LOADED, USER_LOADING } from './types';

export const loginUser = (user) => (dispatch) => {
  dispatch({ type: USER_LOADING });

  axios
    .post('/api/users/login', user)
    .then((res) => dispatch({
      type: USER_LOADED,
      payload: res.data,
    }))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err,
      });
    });
};


export const registerUser = () => {
  console.log('hehe');
};
