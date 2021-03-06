import { GET_LUNCH_BOXES } from './types';

const INITIAL_STATE = {
  list: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_LUNCH_BOXES:
      return { ...state, list: [...action.payload] };
    default:
      return state;
  }
};
