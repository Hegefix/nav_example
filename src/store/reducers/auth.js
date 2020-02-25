import {actionTypes} from '@constants';

const initialState = {
  isLoading: true,
  isSignout: true,
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const {payload} = action;
  switch (action.type) {
    case actionTypes.AUTH_SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case actionTypes.AUTH_SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case actionTypes.AUTH_SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
