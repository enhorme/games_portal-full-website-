import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchingGameDetails } from "src/store/actions";
import { Helmet } from "react-helmet";

import GameScreenShots from "src/components/GameDetails/GameScreenShots";
import GamesList from "src/components/GamesList";

export default () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { game } = useSelector((state) => state.gameDetails);

  useEffect(() => {
    dispatch(fetchingGameDetails(gameId));
  }, [gameId]);

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
