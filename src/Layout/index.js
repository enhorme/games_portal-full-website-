import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import GamesList from "../components/GamesList";
import { Outlet, useLocation } from "react-router";

export default () => {
  const location = useLocation();
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
    </>
  );
};
