import { combineReducers } from 'redux';
import authReducer from './authReducer';
import addCurrentPositionReducer from './addCurrentPositionReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  userPosition: addCurrentPositionReducer,
});
