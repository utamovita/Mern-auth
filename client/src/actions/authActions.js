import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import {
  clearErrors, isLoading, isLoaded, getErrors,
} from '.';

export const setCurrentUser = (decoded) => ({
  type: 'SET_CURRENT_USER',
  payload: decoded,
});

export const registerUser = (userData, history) => (dispatch) => {
  dispatch(isLoading());
  dispatch(clearErrors());
  axios
    .post('/api/users/register', userData)
    .then(() => history.push('/'))
    .catch((err) => dispatch(getErrors(err.response.data)));
};

export const loginUser = (userData) => (dispatch) => {
  dispatch(isLoading());
  dispatch(clearErrors());
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwtDecode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(isLoaded());
    })
    .catch((err) => {
      dispatch(getErrors(err.response.data));
      dispatch(isLoaded());
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
