import axios from "axios";
import { dateObj } from "./date";
const BASE_URL = "https://api.rawg.io/api/";

export const getData = axios.create({
  baseURL: BASE_URL,
  params: {
    key: "7e1ae3adb3ef46dfa0488bf6df89e436",
  },
});

const trendingGamesParams = (page, order) => {
  return {
    addUrl: "games/lists/main",
    params: {
      page: page,
      dates: `${dateObj.lastYear},${dateObj.currentDate}`,
      ordering: order,
      discover: "true",
      page_size: 8,
    },
  };
};

const popularGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.lastYear},${dateObj.currentDate}`,
    },
  };
};

const upcomingGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.currentDate},${dateObj.nextYear}`,
    },
  };
};

const newGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.lastYear},${dateObj.currentDate}`,
    },
  };
};

const allTimeGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `1960-01-01,${dateObj.currentDate}`,
    },
  };
};

const thisWeekGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.prevWeek},${dateObj.currentDate}`,
    },
  };
};

const nextWeekGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.currentDate},${dateObj.nextWeek}`,
    },
  };
};

const lastMonthGamesParams = (page, order) => {
  return {
    addUrl: "games",
    params: {
      page: page,
      ordering: order,
      page_size: 8,
      dates: `${dateObj.lastMonth},${dateObj.currentDate}`,
    },
  };
};

export const genreGamesUrl = (genre) => {
  return `${base_url}games?dates=${lastDate},${currentDate}&genres=${genre}&ordering=-metacritic&page_size=${size}`;
};

const gameDetails = (gameId) => {
  return `games/${gameId}`;
};

const gameScreenshots = (gameId) => {
  return `games/${gameId}/screenshots`;
};

export const searchGamesParams = (gameName) => {
  return {
    addUrl: "games",
    params: {
      page: 1,
      page_size: 8,
      search: gameName,
    },
  };
};

export const queryParams = {
  trendingGamesParams,
  popularGamesParams,
  upcomingGamesParams,
  newGamesParams,
  allTimeGamesParams,
  thisWeekGamesParams,
  nextWeekGamesParams,
  lastMonthGamesParams,
  searchGamesParams,
  gameDetails,
  gameScreenshots,
};
