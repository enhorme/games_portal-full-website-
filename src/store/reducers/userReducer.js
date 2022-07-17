import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.EMAIL_PASSWORD_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };

    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case actionTypes.EMAIL_PASSWORD_SIGN_IN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state || initialState;
  }
};
