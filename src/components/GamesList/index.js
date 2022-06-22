import React, { useEffect, useState } from "react";
import GameCard from "../GameCard";
import { fetchingGamesList } from "../../store/reducers/gamesReducer";
import { useDispatch, useSelector } from "react-redux";
import { getGamesList } from "../../store/reducers";

export default () => {
  const { gamesList } = useSelector(getGamesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingGamesList());
  }, []);

  return (
    <section className="games_list">
      {gamesList?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </section>
  );
};
