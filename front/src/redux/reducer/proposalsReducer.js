import { SHOW_PROPOSALS } from '../actionTypes';

export default function proposalsReducer(state = {}, action) {
  // console.log(action.payload);
  switch (action.type) {
    case SHOW_PROPOSALS:
      return //[{ ...state, action.payload }];
    default:
      return state;
  }
}
