import { AUTHENTICATE_USER } from '../actionTypes';

export default function(state = {}, action) {
  console.log(action.payload);
  switch (action.type) {
    case AUTHENTICATE_USER:
      const { user } = action.payload;
      return { ...state, user };
    default:
      return state;
  }
}
