import React from "react";
import Search from "../Search";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserState } from "src/store/reducers";
import { logoutUser } from "src/utils/firebase";

export default () => {
  const location = useLocation();
  const { currentUser } = useSelector(getUserState);
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__item">
            <div className="header__logo">GamesPortal</div>
          </div>
          <div className="header__item-search">
            <Search />
          </div>
          <div className="header__item">
            {currentUser ? (
              <span className="header__item-link" onClick={() => logoutUser()}>
                Sign Out
              </span>
            ) : (
              <>
                <NavLink
                  to="sign-in"
                  className="header__item-link"
                  state={{ fromPage: location }}
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="sign-up"
                  className="header__item-link"
                  state={{ fromPage: location }}
                >
                  Sign Up
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
