import React, { useEffect } from "react";
import { fetchingGameScreenShots } from "src/store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getGameDetails } from "src/store/reducers";

const GameScreenShots = () => {
  const dispatch = useDispatch();
  const { gameId } = useParams();
  const { screenshots } = useSelector(getGameDetails);

  useEffect(() => {
    dispatch(fetchingGameScreenShots(gameId));
  }, [gameId]);

  return (
    <>
      {screenshots?.map((sc) => {
        const newUrlImg = sc.image.replace(
          "/screenshots",
          "/resize/420/-/screenshots"
        );
        return (
          <div key={sc.id} className="game-details__screenshots-item">
            <img src={newUrlImg} alt="" width={300} height={250} />
          </div>
        );
      })}
    </>
  );
};

export default GameScreenShots;
