const initialState = {};

const errorReducer = (state = initialState, action) => {
  const newState = state;

  if (action.type === 'UPDATE_ERROR') {
    newState.error = action.payload;
  }

  return newState;
};

export default errorReducer;
