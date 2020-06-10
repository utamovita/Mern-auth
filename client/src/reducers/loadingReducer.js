import { IS_LOADING, IS_LOADED } from '../actions/types';

const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case IS_LOADING:
      return true;

    case IS_LOADED:
      return false;

    default:
      return state;
  }
}
