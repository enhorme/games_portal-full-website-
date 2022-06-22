import { combineReducers } from "redux";
import { gamesReducer } from "./gamesReducer";
const rootReducer = combineReducers({
  gamesList: gamesReducer,
});

export const getGamesList = (state) => state.gamesList;

export default rootReducer;
