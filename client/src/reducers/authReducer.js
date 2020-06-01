const initialState = {
  user: '',
  jwt: '',
};

const usersReducer = (state = initialState, action) => {
  const newState = state;

  if (action.type === 'UPDATE_USER') {
    newState.error = action.payload;
  }

  return newState;
};

export default usersReducer;
