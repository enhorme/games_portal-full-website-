import React from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import GamesList from "../components/GamesList";

export default () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="page-content">
        <SideBar />
        <main>
          <GamesList />
        </main>
      </div>
      <footer></footer>
    </>
  );
};
