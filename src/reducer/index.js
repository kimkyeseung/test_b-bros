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

const defaultState = {
};

const reducer = (state = defaultState, action) => {
  return state;
}

export default reducer
