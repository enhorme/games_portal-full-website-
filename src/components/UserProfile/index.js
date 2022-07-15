import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserState } from "src/store/reducers";

export default () => {
  const { currentUser } = useSelector(getUserState);

  if (currentUser)
    return (
      <div className="user">
        <div className="user__avatar">{currentUser.email[0].toUpperCase()}</div>
        <span className="user__email">{currentUser.email}</span>
        <div className="user__favorite">
          <NavLink to="/favorite-games">favorite games</NavLink>
        </div>
      </div>
    );
};
