import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default () => {
  const { game } = useSelector((state) => state.gameDetails);
  const { gameId } = useParams();
  if (game?.id === Number(gameId)) {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          height: "500px",
          width: "100%",
          zIndex: "-1",
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${game[
            "background_image"
          ].replace("media/", "media/resize/1280/-/")})`,
          backgroundPosition: "50% 0%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    );
  }
};
