import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { createDocument, deleteDocument } from "src/utils/firebase";
import { useSelector } from "react-redux";
import { getUserState } from "src/store/reducers";
import { useLocation } from "react-router-dom";
import Spinner from "src/components/Spinner";
import rating from "src/components/Rating";

const CardButton = ({ game }) => {
  const { currentUser } = useSelector(getUserState);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      if (!pathname.includes("favorite-game")) {
        await createDocument({ game, rating: null }, game.id);
      } else {
        await deleteDocument(game.id);
      }
    } catch (e) {
      console.error("Error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <button className="card-button" onClick={handleClick}>
      <span>
        {`${pathname.includes("favorite-game") ? "Remove from" : "Add to "}`}{" "}
        favorite
      </span>
      <AiFillPlusCircle size={25} />
    </button>
  );
};

export default CardButton;
