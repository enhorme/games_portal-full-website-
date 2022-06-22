import React, { useEffect, useRef, useState } from "react";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { SiNintendo, SiLinux, SiApplearcade } from "react-icons/si";
import CardMedia from "./CardMedia";
import { NavLink } from "react-router-dom";
import CardButton from "./CardButton";

const platformIcon = {
  Xbox: <FaXbox />,
  PlayStation: <FaPlaystation />,
  PC: <AiFillWindows />,
  Nintendo: <SiNintendo />,
  Linux: <SiLinux />,
  iOS: <AiFillApple />,
  Android: <AiFillAndroid />,
  "Apple Macintosh": <SiApplearcade />,
};

export default ({ game }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const platforms = game["parent_platforms"];
  const title = game.name;

  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <div
      className="game-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: mouseEnter ? 8 : 5 }}
    >
      <CardMedia game={game} />
      <div className="game-card__info">
        <div className="game-card__platforms">
          {platforms?.map((platform, idx) => {
            return (
              <div className="game-card__platform" key={platform.platform.name}>
                {platformIcon[platform.platform.name]}
              </div>
            );
          })}
        </div>
        <div className="game-card__title">
          <h2>{title}</h2>
        </div>
        {mouseEnter && (
          <div
            className="game-card__description"
            style={{ position: "absolute" }}
          >
            <ul className="game-card__desct-list">
              <li>
                <span>Release date:</span> <span>{game.released}</span>
              </li>
              <li>
                <span>Genres:</span>
                <span>
                  {game.genres?.map(({ name }) => (
                    <NavLink to={"#"}>{name}</NavLink>
                  ))}
                </span>
              </li>
              <li>
                <span>Metacritic:</span> <span>{game.metacritic}</span>
              </li>
            </ul>
            <CardButton />
          </div>
        )}
      </div>
    </div>
  );
};
