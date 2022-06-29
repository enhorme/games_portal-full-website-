import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";

export default () => {
  const { gamesDetails } = useParams();

  useEffect(() => {}, []);
  return <div>GameDetails</div>;
};
