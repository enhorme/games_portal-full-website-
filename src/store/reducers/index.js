import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { gameReducer } from "./gameReducer";

const rootReducer = combineReducers({
  gamesList: gamesReducer,
  gameDetails: gameReducer,
});

export const getGamesList = (state) => state.gamesList;
export const getGame = (state) => state.gameDetails;

export default rootReducer;
