import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

export default () => {
  const [rating, setRating] = useState(0);

  const handleChoose = (i) => {
    setRating(i);
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
            onMouseEnter={() => handleChoose(i)}
            onMouseLeave={() => handleChoose(i)}
          >
            <input style={{ display: "none" }} type="radio" name="rating" />
            <FaStar color={i <= rating ? "#ffc107" : "#e4e5e9"} size={50} />
          </label>
        );
      })}
    </div>
  );
};
