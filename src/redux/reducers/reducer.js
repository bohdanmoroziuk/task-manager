export const makeReducer = (handlers = {}, initialState = {}) => {
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  return (state, action) => {
    const prevState = state || initialState;

    return hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](prevState, action)
      : prevState;
  };
};
