import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData, queryParams } from "src/api/axios";
import { getUserState } from "src/store/reducers";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { firestoreDB } from "src/utils/firebase";
import GameCard from "src/components/GameCard";
import Spinner from "src/components/Spinner";
import ScrollButton from "src/components/ScrollButton";

export default () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useSelector(getUserState);

  useEffect(() => {
    const getIdList = async () => {
      setIsLoading(true);

      await onSnapshot(
        doc(firestoreDB, "users", `${currentUser?.uid}`),
        async (doc) => {
          const data = await doc.data();
          if (data?.idList?.length) {
            await (async function () {
              const list = [];
              for await (let { gameId, userRating } of data.favoriteGameList) {
                const { data } = await getData(queryParams.gameDetails(gameId));
                const screenShots = await getData(
                  queryParams.gameScreenshots(gameId)
                );
                data.screenshots = screenShots.data.results;
                data.userRating = userRating;
                list.push(data);
              }
              setList(list);
              setIsLoading(false);
            })();
          }
        }
      );
    };
    getIdList();
  }, []);

  if (isLoading) return <Spinner />;
  return (
    <section className="games_list">
      {list?.map((game) => {
        return (
          <GameCard game={game} key={game.id} screenShots={game.screenshots} />
        );
      })}
      <ScrollButton />
    </section>
  );
};
