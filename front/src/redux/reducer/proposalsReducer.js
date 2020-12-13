import { SHOW_PROPOSALS } from '../actionTypes';

export default function proposalsReducer(state = {}, action) {
  // console.log(action.payload);
  switch (action.type) {
    case SHOW_PROPOSALS:
      const mapOffer = action.payload;
      return [{ ...state, mapOffer }];
    default:
      return state;
  }
}
