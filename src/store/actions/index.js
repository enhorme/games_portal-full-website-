import { getGamesList, queryParams } from "src/api/axios";
import { actionTypes } from "./actionTypes";

const fetchingGamesIsLoading = (payload) => ({
  type: actionTypes.FETCHING_GAMES_LIST_LOADING,
  payload,
});
const fetchingGamesError = () => ({
  type: actionTypes.FETCHING_GAMES_LIST_ERROR,
});

export const fetchingGamesList = (path, page) => {
  return async (dispatch) => {
    dispatch(fetchingGamesIsLoading(true));
    const { type, params } = getGamesByQuery(path, page);
    try {
      const res = await getGamesList(params.addUrl, {
        params: params.params,
      });
      console.log("res", res);
      dispatch({
        type: type,
        payload: res.data.results,
      });
    } catch (e) {
      console.log(e.messages);
      dispatch(fetchingGamesError());
    } finally {
      dispatch(fetchingGamesIsLoading(false));
    }
  };
};

const getGamesByQuery = (path = "", page) => {
  console.log("path", path);
  switch (path) {
    case "":
      return {
        type: actionTypes.FETCHING_TRENDING_GAMES,
        params: queryParams.trendingGamesParams(page),
      };
    case "popular":
      return {
        type: actionTypes.FETCHING_POPULAR_GAMES,
        params: queryParams.popularGamesParams(page),
      };
    case "upcoming":
      return {
        type: actionTypes.FETCHING_UPCOMING_GAMES,
        params: queryParams.upcomingGamesParams(page),
      };
    case "newGames":
      return {
        type: actionTypes.FETCHING_NEW_GAMES,
        params: queryParams.newGamesParams(page),
      };
    case "allTime":
      return {
        type: actionTypes.FETCHING_ALLTIME_GAMES,
        params: queryParams.allTimeGamesParams(page),
      };
    case "nextWeek":
      return {
        type: actionTypes.FETCHING_NEXT_WEEK_GAMES,
        params: queryParams.nextWeekGamesParams(page),
      };
    case "thisWeek":
      return {
        type: actionTypes.FETCHING_THIS_WEEK_GAMES,
        params: queryParams.thisWeekGamesParams(page),
      };
    case "lastMonth":
      return {
        type: actionTypes.FETCHING_LASTMONTH_GAMES,
        params: queryParams.lastMonthGamesParams(page),
      };

    default:
      return {
        type: actionTypes.FETCHING_TRENDING_GAMES,
        params: queryParams.trendingGamesParams(page),
      };
  }
};
