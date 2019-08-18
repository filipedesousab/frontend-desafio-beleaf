import { UPDATE_SIDEBAR } from './types';

const INITIAL_STATE = {
  menu: [
    {
      href: '#',
      label: 'Marmitas',
      icon: 'fa fa-cutlery',
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SIDEBAR:
      return { ...state, menu: [...action.payload] };
    default:
      return state;
  }
};
