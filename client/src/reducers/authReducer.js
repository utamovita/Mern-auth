import { USER_LOADED, USER_LOADING } from '../actions/types';

const initialState = {
  user: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload,
      };

    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
