import React, { useEffect, useRef, useState } from "react";

const CardMedia = ({ game }) => {
  const [imgMouseEnter, setMouseEnter] = useState(false);
  const [tabImgActive, setTabImgActive] = useState(0);
  const [width, setWidth] = useState(0);
  const imgRef = useRef(null);

  const screenShotsArray = game["short_screenshots"];

  useEffect(() => {
    const widthImg = imgRef.current.clientWidth;
    setWidth(widthImg / screenShotsArray.length);
  }, []);

  const handleMove = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    const currentSlide =
      Math.ceil(x / width) < 1
        ? 0
        : Math.ceil(x / width) - 1 > screenShotsArray.length - 1
        ? screenShotsArray.length - 1
        : Math.ceil(x / width) - 1;

    setTabImgActive(currentSlide);
  };

  const handleEnter = () => {
    !imgMouseEnter && setMouseEnter(true);
  };

  const handleLeave = () => {
    setTabImgActive(0);
    setMouseEnter(false);
  };

  return (
    <div
      className="game-card__image"
      onMouseEnter={handleEnter}
      onMouseMove={(e) => handleMove(e)}
      onMouseLeave={handleLeave}
      ref={imgRef}
    >
      <img src={screenShotsArray[tabImgActive].image} alt="" />
      {imgMouseEnter && (
        <div>
          <div className="game-card__dots-wrapper">
            {Array(screenShotsArray?.length)
              .fill(null)
              .map((_i, idx) => (
                <div
                  className={`game-card__dots ${
                    idx === tabImgActive && "game-card__dots-active"
                  }`}
                  key={idx}
                ></div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(CardMedia);
