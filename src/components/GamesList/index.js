import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import GameCard from "../GameCard";
import Spinner from "src/components/Spinner";
import ScrollButton from "src/components/ScrollButton";
import { useParams } from "react-router";
import { fetchingGamesList } from "src/store/actions";

export default () => {
  const [page, setPage] = useState(1);
  const games = useSelector((state) => state.gamesList);
  const dispatch = useDispatch();
  const { rel } = useParams();
  const { isLoading } = games;

  const observer = useRef();

  const currentGames = games[`${rel || "trending"}`];

  const lastElementRef = useCallback(
    (element) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && currentGames.pageCount > page) {
            setPage((p) => p + 1);
          }
        },
        { threshold: 1.0 }
      );
      if (element) observer.current.observe(element);
    },
    [isLoading]
  );

  useEffect(() => {
    setPage(1);
  }, [rel]);

  useEffect(() => {
    dispatch(fetchingGamesList(rel, page));
  }, [rel, page]);

  return (
    <section className="games_list">
      {currentGames.list.map((game, index) => {
        if (games[`${rel ?? "trending"}`].list.length === index + 1) {
          return <GameCard ref={lastElementRef} game={game} key={game.id} />;
        } else {
          return <GameCard game={game} key={game.id} />;
        }
      })}
      {isLoading ? <Spinner /> : null}
      <ScrollButton />
    </section>
  );
};
