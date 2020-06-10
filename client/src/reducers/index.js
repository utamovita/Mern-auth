import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  errors: errorReducer,
  auth: authReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
