import { GET_ITEMS } from '../constants/actionTypes';

const clone = obj => {
  if (obj && typeof(obj) !== 'object') {
    return obj;
  }
  const copy = obj.constructor();
  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = clone(obj[attr]);
    }
  }
  return copy;
}

export const defaultState = {
  items: []
};

const reducer = (state = defaultState, action) => {
  const newState = clone(state);
  switch (action.type) {
    case GET_ITEMS: {
      newState.items = action.items;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducer
