import React, { useEffect, useRef, useState } from "react";
import useWindowResize from "src/hooks/useWindowResize";

import placeholder from "src/assets/img/placeholder.jpg";
import Spinner from "src/components/Spinner";

const CardMedia = ({ game }) => {
  const [imgMouseEnter, setMouseEnter] = useState(false);
  const [tabImgActive, setTabImgActive] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [width, setWidth] = useState(0);
  const imgRef = useRef(null);
  const size = useWindowResize();

  const screenShotsArray = game["short_screenshots"] || game.screenshots;

  useEffect(() => {
    const widthImg = imgRef.current.clientWidth;
    setWidth(widthImg / screenShotsArray.length);
  }, [size]);

  const handleMove = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    const currentSlide =
      Math.floor(x / width) < 1
        ? 0
        : Math.floor(x / width) > screenShotsArray.length - 1
        ? screenShotsArray.length - 1
        : Math.floor(x / width);
    setTabImgActive(currentSlide);
  };

  const handleEnter = () => {
    !imgMouseEnter && setMouseEnter(true);
  };

  const handleLeave = () => {
    setTabImgActive(0);
    setMouseEnter(false);
  };

  const onImageLoaded = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      className="game-card__image"
      onMouseEnter={handleEnter}
      onMouseMove={(e) => handleMove(e)}
      onMouseLeave={handleLeave}
      ref={imgRef}
    >
      {!isImageLoaded ? <Spinner /> : null}

      <img
        src={
          screenShotsArray && screenShotsArray.length
            ? screenShotsArray[tabImgActive]?.image.replace(
                "media/",
                "media/resize/640/-/"
              )
            : placeholder
        }
        alt=""
        onLoad={onImageLoaded}
        loading="lazy"
      />

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
