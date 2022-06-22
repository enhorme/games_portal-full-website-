import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const CardButton = () => {
  return (
    <button className="card-button">
      <span>Show more like this</span>
      <AiOutlineRight />
    </button>
  );
};

export default CardButton;
