import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import GameDetails from "./components/GameDetails";
import DiscoverPage from "src/pages/DiscoverPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={"discover/:rel"} element={<DiscoverPage />} />
        <Route path=":gamesDetails" element={<GameDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
