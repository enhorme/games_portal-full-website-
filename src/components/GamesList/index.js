import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamesList } from "src/store/reducers";

import GameCard from "../GameCard";
import Spinner from "src/components/Spinner";
import ScrollButton from "src/components/ScrollButton";
import { useParams } from "react-router";
import { fetchingGamesList } from "src/store/actions";

export default () => {
  const games = useSelector((state) => state.gamesList);
  let { rel } = useParams();
  const { isFetching } = games;
  const dispatch = useDispatch();

  const page = useRef(1);

  const handleScroll = useCallback((e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      page.current += 1;
      dispatch(fetchingGamesList(rel, page.current));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchingGamesList(rel, page.current));
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rel]);

  return (
    <section className="games_list">
      {games[`${rel || "trending"}`]?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      {isFetching ? <Spinner /> : null}
      <ScrollButton />
    </section>
  );
};
