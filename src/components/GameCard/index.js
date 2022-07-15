import React, { forwardRef, useState } from "react";
import { FaXbox, FaPlaystation } from "react-icons/fa";
import { AiFillWindows, AiFillApple, AiFillAndroid } from "react-icons/ai";
import { SiNintendo, SiLinux, SiApplearcade } from "react-icons/si";
import CardMedia from "src/components/GameCard/CardMedia";
import { NavLink } from "react-router-dom";
import CardButton from "src/components/GameCard/CardButton";
import metacriticsColor from "../../utils/metacriticsColor";
import { useNavigate } from "react-router";
import RatingStars from "src/components/Rating";

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

export default forwardRef(({ game }, ref) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const navigate = useNavigate();
  const platforms = game["parent_platforms"];
  const title = game.name;
  const metaCount = game.metacritic;
  const color = metacriticsColor(metaCount);
  const handleMouseEnter = () => {
    setMouseEnter(true);
  };

  const handleMouseLeave = () => {
    setMouseEnter(false);
  };

  return (
    <div
      ref={ref}
      className="game-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: mouseEnter ? 8 : 5 }}
    >
      <CardMedia game={game} />
      <div className="game-card__info">
        <div className="game-card__platforms">
          {platforms?.map((platform) => {
            return (
              <div className="game-card__platform" key={platform.platform.name}>
                {platformIcon[platform.platform.name]}
              </div>
            );
          })}
          {game.metacritic && (
            <div
              className="game-card__meta"
              style={{ color: color, borderColor: color }}
            >
              {game.metacritic}
            </div>
          )}
        </div>
        <div className="game-card__title">
          <h2
            onClick={() =>
              navigate(`/details/${game.slug}`, { state: game.id })
            }
          >
            {title}
          </h2>
        </div>
        {game.screenshots && <RatingStars gameId={game.id} />}
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
                    <NavLink to={"#"} key={name}>
                      {name}
                    </NavLink>
                  ))}
                </span>
              </li>
            </ul>
            <CardButton id={game.id} />
          </div>
        )}
      </div>
    </div>
  );
});
