import { getData, queryParams } from "src/api/axios";
import { actionTypes } from "./actionTypes";
import { auth } from "src/utils/firebase";
import { signOut } from "firebase/auth";
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

export const setUser = (user) => ({
  type: actionTypes.SET_USER,
  payload: user,
});
