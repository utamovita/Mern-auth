/* eslint-disable import/prefer-default-export */
import {
  CLEAR_ERRORS, IS_LOADING, IS_LOADED, GET_ERRORS,
} from './types';

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const isLoading = () => ({
  type: IS_LOADING,
});

export const isLoaded = () => ({
  type: IS_LOADED,
});

export const getErrors = (errors) => ({
  type: GET_ERRORS,
  payload: errors,
});
