import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  trending: [],
  allGames: [],
  popular: [],
  newGames: [],
  upcoming: [],
  nextWeek: [],
  thisWeek: [],
  lastMonth: [],
  searched: [],
  isFetching: false,
  error: false,
};

export const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCHING_ALLTIME_GAMES: {
      return {
        ...state,
        allGames: [...state.allGames, ...payload],
      };
    }

    case actionTypes.FETCHING_TRENDING_GAMES: {
      return {
        ...state,
        trending: [...state.trending, ...payload],
      };
    }

    case actionTypes.FETCHING_LASTMONTH_GAMES: {
      return {
        ...state,
        lastMonth: [...state.lastMonth, ...payload],
      };
    }

    case actionTypes.FETCHING_THIS_WEEK_GAMES: {
      return {
        ...state,
        thisWeek: [...state.thisWeek, ...payload],
      };
    }

    case actionTypes.FETCHING_NEXT_WEEK_GAMES: {
      return {
        ...state,
        nextWeek: [...state.nextWeek, ...payload],
      };
    }

    case actionTypes.FETCHING_UPCOMING_GAMES: {
      return {
        ...state,
        upcoming: [...state.upcoming, ...payload],
      };
    }

    case actionTypes.FETCHING_GAMES_LIST_LOADING: {
      return { ...state, isFetching: payload };
    }

    case actionTypes.FETCHING_GAMES_LIST_ERROR: {
      return { ...state, error: true };
    }

    default:
      return state;
  }
};
