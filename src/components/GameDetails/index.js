import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchingGameDetails } from "src/store/actions";
import { Helmet } from "react-helmet";

import GameScreenShots from "src/components/GameDetails/GameScreenShots";

export default () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.gameDetails);

  useEffect(() => {
    dispatch(fetchingGameDetails(state));
  }, [state]);

  return (
    <>
      <Helmet>
        <title>{game.name}</title>
      </Helmet>
      <div className="game-details">
        <div className="game-details__wrapper">
          <div className="game-details__info">
            <span>{game.name}</span>
          </div>
          <div className="game-details__screenshots">
            <GameScreenShots />
          </div>
        </div>
      </div>
    </>
  );
};
