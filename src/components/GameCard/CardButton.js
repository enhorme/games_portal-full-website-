import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { doc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { firestoreDB } from "src/utils/firebase";
import { useSelector } from "react-redux";
import { getUserState } from "src/store/reducers";
import { useLocation } from "react-router-dom";
import Spinner from "src/components/Spinner";

const CardButton = ({ id }) => {
  const { currentUser } = useSelector(getUserState);
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await setDoc(
        doc(firestoreDB, "users", `${currentUser.uid}`),
        {
          gameId: {
            id: pathname.includes("favorite-game")
              ? arrayRemove(id)
              : arrayUnion(id),
          },
        },
        { merge: true }
      );
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
