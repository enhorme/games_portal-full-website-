import { getData, queryParams } from "src/api/axios";
import { actionTypes } from "./actionTypes";
import axios from "axios";

const fetchingGamesIsLoading = (payload) => ({
  type: actionTypes.FETCHING_GAMES_LIST_LOADING,
  payload,
});

const fetchingGamesError = (payload) => ({
  type: actionTypes.FETCHING_GAMES_LIST_ERROR,
  payload,
});

const fetchingGameDetailsIsLoading = (payload) => ({
  type: actionTypes.FETCHING_GAME_LOADING,
  payload,
});

const fetchingGameDetailsError = () => ({
  type: actionTypes.FETCHING_GAME_ERROR,
});

const fetchingGameDetailsScreenShots = (payload) => ({
  type: actionTypes.FETCHING_GAME_SCREENSHOTS,
  payload,
});

export const filterGamesList = (payload) => ({
  type: actionTypes.GAMES_ORDER,
  payload,
});

export const fetchingGamesList = (path, page, order) => async (dispatch) => {
  dispatch(fetchingGamesIsLoading(true));
  const { type, params } = getGamesByQuery(path, page, order);

  try {
    const res = await getData(params.addUrl, {
      params: params.params,
    });
    dispatch({
      type: type,
      payload: {
        list: res.data.results,
        pageCount: Math.ceil(res.data.count / 8),
      },
    });
  } catch (e) {
    if (axios.isCancel(e)) return;
    console.log(e.messages);
    dispatch(fetchingGamesError());
  } finally {
    dispatch(fetchingGamesIsLoading(false));
  }
};

export const fetchingGameDetails = (gameId) => async (dispatch) => {
  dispatch(fetchingGameDetailsIsLoading(true));
  dispatch(fetchingGamesError(false));
  try {
    const gameData = await getData(queryParams.gameDetails(gameId));

    dispatch({
      type: actionTypes.FETCHING_GAME,
      payload: gameData.data,
    });
  } catch (e) {
    console.log(e.messages);
    dispatch(fetchingGameDetailsError(true));
  } finally {
    dispatch(fetchingGameDetailsIsLoading(false));
  }
};

export const fetchingGameScreenShots = (gameId) => async (dispatch) => {
  dispatch(fetchingGameDetailsIsLoading(true));
  dispatch(fetchingGamesError(false));
  try {
    const gameScreenShots = await getData(queryParams.gameScreenshots(gameId));
    dispatch(fetchingGameDetailsScreenShots(gameScreenShots.data.results));
  } catch (e) {
    console.log(e.messages);
    dispatch(fetchingGamesError(true));
  } finally {
    dispatch(fetchingGameDetailsIsLoading(false));
  }
};

const getGamesByQuery = (path = "", page, order) => {
  switch (path) {
    case "":
      return {
        type: actionTypes.FETCHING_TRENDING_GAMES,
        params: queryParams.trendingGamesParams(page, order),
      };
    case "popular":
      return {
        type: actionTypes.FETCHING_POPULAR_GAMES,
        params: queryParams.popularGamesParams(page, order),
      };
    case "upcoming":
      return {
        type: actionTypes.FETCHING_UPCOMING_GAMES,
        params: queryParams.upcomingGamesParams(page, order),
      };
    case "newGames":
      return {
        type: actionTypes.FETCHING_NEW_GAMES,
        params: queryParams.newGamesParams(page, order),
      };
    case "allTime":
      return {
        type: actionTypes.FETCHING_ALLTIME_GAMES,
        params: queryParams.allTimeGamesParams(page, order),
      };
    case "nextWeek":
      return {
        type: actionTypes.FETCHING_NEXT_WEEK_GAMES,
        params: queryParams.nextWeekGamesParams(page, order),
      };
    case "thisWeek":
      return {
        type: actionTypes.FETCHING_THIS_WEEK_GAMES,
        params: queryParams.thisWeekGamesParams(page, order),
      };
    case "lastMonth":
      return {
        type: actionTypes.FETCHING_LASTMONTH_GAMES,
        params: queryParams.lastMonthGamesParams(page, order),
      };

    default:
      return {
        type: actionTypes.FETCHING_TRENDING_GAMES,
        params: queryParams.trendingGamesParams(page, order),
      };
  }
};

///auth actions

const logoutStart = () => ({
  type: actionTypes.LOGOUT_START,
});

const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

const logoutError = (error) => ({
  type: actionTypes.LOGOUT_FAIL,
  payload: error,
});

const registerStart = () => ({
  type: actionTypes.REGISTER_START,
});

const registerSuccess = ({ user, additionalData }) => ({
  type: actionTypes.REGISTER_SUCCESS,
  payload: { user, additionalData },
});

const registerError = (error) => ({
  type: actionTypes.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: actionTypes.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

const loginError = (error) => ({
  type: actionTypes.LOGIN_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const addFavoriteGame = (payload) => ({
  type: actionTypes.ADD_FAVORITE_GAME,
  payload,
});
export const addDeleteteFavoriteGame = (payload) => ({
  type: actionTypes.DELETE_FAVORITE_GAME,
  payload,
});

export const registerUser = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess({ user, additionalData: { displayName } }));
      })
      .catch((error) => dispatch(registerError(error.message)));
  };
};

export const loginInUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch((error) => dispatch(loginError(error.message)));
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then((resp) => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutError(error.message)));
  };
};
