import { ADD_CURRENT_POSITION } from '../actionTypes';

export default function addCurrentPositionReducer(state = {}, action) {
  switch (action.type) {
    case ADD_CURRENT_POSITION:
      const userPosition = action.payload;
      return { ...state, userPosition };
    default:
      return state;
  }
};
