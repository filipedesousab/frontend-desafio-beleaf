import {
  SET_USER_DATA,
} from './types';

const INITIAL_STATE = {
  user: {
    id: '',
    name: '',
    hash: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, user: { ...action.payload } };
    default:
      return state;
  }
};
