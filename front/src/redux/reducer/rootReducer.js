import { combineReducers } from 'redux';
import authReducer from './authReducer';
import proposalsReducer from './proposalsReducer';
import addCurrentPositionReducer from './addCurrentPositionReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  proposals: proposalsReducer,
  userPosition: addCurrentPositionReducer,
});
