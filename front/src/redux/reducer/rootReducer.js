import { combineReducers } from 'redux';
import authReducer from './authReducer';
import proposalsReducer from './proposalsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  proposals: proposalsReducer,
});
