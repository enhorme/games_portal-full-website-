import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { updateRatingFavorite } from "src/utils/firebase";

export default ({ gameId, rating: rt }) => {
  const [rating, setRating] = useState(rt || 3);
  const [hover, setHover] = useState(rt);
  const handleChoose = (i) => {
    setRating(i);
    updateRatingFavorite(gameId, i);
  };
  const handleHover = (i) => {
    setHover(i);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, i) => {
        i += 1;
        return (
          <label
            style={{ cursor: "pointer" }}
            key={i}
            onClick={() => handleChoose(i)}
            onMouseEnter={() => handleHover(i)}
            onMouseLeave={() => setHover(rating)}
          >
            <input style={{ display: "none" }} type="radio" name="rating" />
            <FaStar
              color={i <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
            />
          </label>
        );
      })}
    </div>
  );
};
