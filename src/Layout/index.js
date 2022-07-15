import React from "react";
import { Outlet } from "react-router";

import Header from "src/components/Header";
import SideBar from "src/components/SideBar";
import GameDetailsBG from "src/components/GameDetailsBG";
import Helmet from "src/components/Helmet";

export default () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="page-content">
        <SideBar />
        <main>
          <Helmet />
          <Outlet />
        </main>
      </div>
      <footer></footer>
      <GameDetailsBG />
    </>
  );
};
