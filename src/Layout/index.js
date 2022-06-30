import React from "react";
import { Outlet, useLocation } from "react-router";

import Header from "src/components/Header";
import SideBar from "src/components/SideBar";
import GameDetailsBG from "src/components/GameDetailsBG";

export default () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="page-content">
        <SideBar />
        <main>
          <Outlet />
        </main>
      </div>
      <footer></footer>
      <GameDetailsBG />
    </>
  );
};
