import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MainPage from "./pages/MainPage";
import GameDetails from "./components/GameDetails";
import DiscoverPage from "src/pages/DiscoverPage";
import Form from "src/components/Form";
import Portal from "src/components/Portal";
import { Navigate } from "react-router";
import authCheck from "src/utils/authCheck";
import FavoritePage from "src/components/FavoritePage";

const App = () => {
  authCheck();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="discover/:rel" element={<DiscoverPage />} />
        <Route path="details/:gameName" element={<GameDetails />} />
        <Route path="favorite-games" element={<FavoritePage />} />
        <Route
          path="sign-up"
          element={
            <Portal
              render={(fromPage) => (
                <Form formType="signup" fromPage={fromPage} />
              )}
            />
          }
        />
        <Route
          path="sign-in"
          element={
            <Portal
              render={(fromPage) => (
                <Form formType="signin" fromPage={fromPage} />
              )}
            />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
