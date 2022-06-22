import { getGamesList } from "../../api/axios";

const FETCHING_GAMES_LIST = "FETCHING_GAMES_LIST";
const FETCHING_GAMES_LIST_LOADING = "FETCHING_GAMES_LIST_LOADING";
const FETCHING_GAMES_LIST_ERROR = "FETCHING_GAMES_LIST_ERROR";

const fetchingGamesIsLoading = (payload) => ({
  type: FETCHING_GAMES_LIST_LOADING,
  payload,
});
const fetchingGamesError = () => ({ type: FETCHING_GAMES_LIST_ERROR });

export const fetchingGamesList = () => {
  return async (dispatch) => {
    dispatch(fetchingGamesIsLoading(true));
    try {
      const res = await getGamesList({
        params: {
          page: 1,
          page_size: 10,
        },
      });
      dispatch({ type: FETCHING_GAMES_LIST, payload: res.data.results });
    } catch (e) {
      console.log(e.messages);
      fetchingGamesError();
    } finally {
      dispatch(fetchingGamesIsLoading(false));
    }
  };
};

const initialState = {
  gamesList: [],
  isFetching: false,
  error: false,
};

export const gamesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHING_GAMES_LIST: {
      return { ...state, gamesList: state.gamesList.concat(payload) };
    }
    case FETCHING_GAMES_LIST_LOADING: {
      return { ...state, isFetching: payload };
    }
    case FETCHING_GAMES_LIST_ERROR: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
};
