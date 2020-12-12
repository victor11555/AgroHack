import { AUTHENTICATE_USER } from '../actionTypes';
import { REMOVE_USER } from '../actionTypes';

export default function authReducer(state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case AUTHENTICATE_USER:
      const user = action.payload;
      return { ...state, user };
    case REMOVE_USER:
      return { ...state, state: {} }; // smth need to complite
    default:
      return state;
  }
}
