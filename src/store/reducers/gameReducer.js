import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  game: {},
  screenshots: [],
  isLoading: false,
  error: false,
};

export const gameReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCHING_GAME: {
      return { ...state, game: payload };
    }
    case actionTypes.FETCHING_GAME_SCREENSHOTS: {
      return { ...state, screenshots: payload };
    }

    case actionTypes.FETCHING_GAME_LOADING: {
      return { ...state, isLoading: payload };
    }
    case actionTypes.FETCHING_GAME_ERROR: {
      return { ...state, error: payload };
    }

    default:
      return state;
  }
};
