import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getData, queryParams } from "src/api/axios";
import { getUserState } from "src/store/reducers";
import {
  doc,
  getDoc,
  onSnapshot,
  collection,
  query,
  getDocs,
} from "firebase/firestore";
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
      const q = query(
        collection(firestoreDB, `users/${currentUser?.uid}/games/`)
      );
      onSnapshot(q, (querySnapshot) => {
        const list = [];
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setList(list);
      });
      setIsLoading(false);
    };
    getIdList();
  }, [currentUser]);

  console.log(list);
  if (isLoading) return <Spinner />;
  return (
    <section className="games_list">
      {list?.map(({ game, rating }) => {
        return (
          <GameCard
            game={game}
            key={game.id}
            screenShots={game.screenshots}
            favorite={true}
            rating={rating}
          />
        );
      })}
      <ScrollButton />
    </section>
  );
};
