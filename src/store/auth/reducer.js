import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: true,
  isSignout: true,
  token: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case actionTypes.SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;
