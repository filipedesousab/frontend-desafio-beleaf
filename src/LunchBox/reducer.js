import {
  ADD_LUNCH_BOX,
  CHANGE_LUNCH_BOX_NAME,
  CHANGE_LUNCH_BOX_PRICE,
  CHANGE_LUNCH_BOX_QUANTITY,
  CHANGE_LUNCH_BOX_DESCRIPTION,
  CHANGE_LUNCH_BOX_INGREDIENTS,
  CHANGE_LUNCH_BOX_IMAGE,
  SELECT_LUNCH_BOX,
} from './types';

const INITIAL_STATE = {
  list: {},
  selected: {
    id: '',
    name: '',
    price: '',
    discount: '',
    quantity: '',
    image: '',
    description: '',
    ingredients: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LUNCH_BOX: {
      const lunchBox = {};
      lunchBox[action.payload.id] = action.payload;

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case SELECT_LUNCH_BOX:
      return { ...state, selected: { ...action.payload } };
    case CHANGE_LUNCH_BOX_NAME: {
      const lunchBox = {};
      lunchBox[action.payload.id] = { ...state.list[action.payload.id], name: action.payload.name };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case CHANGE_LUNCH_BOX_PRICE: {
      const lunchBox = {};
      lunchBox[action.payload.id] = {
        ...state.list[action.payload.id],
        price: action.payload.price,
        discount: action.payload.discount,
      };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case CHANGE_LUNCH_BOX_QUANTITY: {
      const lunchBox = {};
      lunchBox[action.payload.id] = {
        ...state.list[action.payload.id],
        quantity: action.payload.quantity,
      };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case CHANGE_LUNCH_BOX_DESCRIPTION: {
      const lunchBox = {};
      lunchBox[action.payload.id] = {
        ...state.list[action.payload.id],
        description: action.payload.description,
      };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case CHANGE_LUNCH_BOX_INGREDIENTS: {
      const lunchBox = {};
      lunchBox[action.payload.id] = {
        ...state.list[action.payload.id],
        ingredients: action.payload.ingredients,
      };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    case CHANGE_LUNCH_BOX_IMAGE: {
      const lunchBox = {};
      lunchBox[action.payload.id] = {
        ...state.list[action.payload.id],
        image: action.payload.image,
      };

      return { ...state, list: { ...state.list, ...lunchBox } };
    }
    default:
      return state;
  }
};
