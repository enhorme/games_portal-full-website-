import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
  favorite: [],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.EMAIL_PASSWORD_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };

    case actionTypes.EMAIL_PASSWORD_LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };

    case actionTypes.GET_FAVORITE_GAMES:
      return {
        ...state,
        favorite: payload,
      };

    case actionTypes.ADD_FAVORITE_GAME:
      return state.favorite.includes(payload)
        ? { ...state, favorite: [...state.favorite, payload] }
        : state;

    case actionTypes.DELETE_FAVORITE_GAME:
      return {
        ...state,
        favorite: state.favorite.filter((i) => i !== payload),
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
