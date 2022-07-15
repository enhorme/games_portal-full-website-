import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
import { gameReducer } from "./gameReducer";
import { userReducer } from "src/store/reducers/userReducer";

const rootReducer = combineReducers({
  gamesList: gamesReducer,
  gameDetails: gameReducer,
  user: userReducer,
});

export const getGamesList = (state) => state.gamesList;
export const getGameDetails = (state) => state.gameDetails;
export const getUserState = (state) => state.user;

export default rootReducer;
