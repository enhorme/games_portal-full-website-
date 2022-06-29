import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  game: {},
  isFetching: false,
  error: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCHING_GAME: {
      return { ...state, game: payload };
    }
    case actionTypes.FETCHING_GAME_LOADING: {
      return { ...state, isFetching: payload };
    }
    case actionTypes.FETCHING_GAME_ERROR: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
};
