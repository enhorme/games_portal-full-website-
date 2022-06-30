import { actionTypes } from "src/store/actions/actionTypes";

const initialState = {
  trending: { list: [], pageCount: 0 },
  allTime: { list: [], pageCount: 0 },
  popular: { list: [], pageCount: 0 },
  newGames: { list: [], pageCount: 0 },
  upcoming: { list: [], pageCount: 0 },
  nextWeek: { list: [], pageCount: 0 },
  thisWeek: { list: [], pageCount: 0 },
  lastMonth: { list: [], pageCount: 0 },
  searched: [],
  isLoading: false,
  error: false,
};

const uniqArray = (array) => {
  const key = "id";
  return [...new Map(array.map((item) => [item[key], item])).values()];
};

export const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCHING_ALLTIME_GAMES: {
      return {
        ...state,
        allTime: {
          list: uniqArray([...state.allTime.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_TRENDING_GAMES: {
      return {
        ...state,
        trending: {
          list: uniqArray([...state.trending.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_LASTMONTH_GAMES: {
      return {
        ...state,
        lastMonth: {
          list: uniqArray([...state.lastMonth.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_THIS_WEEK_GAMES: {
      return {
        ...state,
        thisWeek: {
          list: uniqArray([...state.thisWeek.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_NEXT_WEEK_GAMES: {
      return {
        ...state,
        nextWeek: {
          list: uniqArray([...state.nextWeek.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_UPCOMING_GAMES: {
      return {
        ...state,
        upcoming: {
          list: uniqArray([...state.upcoming.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_NEW_GAMES: {
      return {
        ...state,
        newGames: {
          list: uniqArray([...state.newGames.list, ...payload.list]),
          pageCount: payload.pageCount,
        },
      };
    }

    case actionTypes.FETCHING_GAMES_LIST_LOADING: {
      return { ...state, isLoading: payload };
    }

    case actionTypes.FETCHING_GAMES_LIST_ERROR: {
      return { ...state, error: true };
    }

    default:
      return state;
  }
};
