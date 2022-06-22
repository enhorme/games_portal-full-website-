import React from "react";
import Search from "../Search";

export default () => {
  return (
    <>
      <div className="header">
        <div className="header__wrapper">
          <div className="header__item">
            <div className="header__logo">GamesPortal</div>
          </div>
          <div className="header__item">
            <Search />
          </div>
          <div className="header__item">
            <a href="" className="header__item-link">
              Login
            </a>
            <a href="" className="header__item-link">
              SingUp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
