import React from "react";
import GamesList from "src/components/GamesList";
import { useParams } from "react-router";

export default () => {
  const { releases } = useParams();
  return <GamesList endpoint={releases} />;
};
