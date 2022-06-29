import React from "react";
import { NavLink } from "react-router-dom";
import ItemsBlock from "./ItemsBlock";

import { AiFillStar, AiFillFire, AiOutlineCalendar } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";

const createLinkArray = (name, route, icon) => ({
  name,
  route,
  icon,
});

const linksReleases = [
  createLinkArray("New Games", "discover/newGames", <TbPlayerTrackNext />),
  createLinkArray("Last 30 days", "discover/lastMonth", <AiFillStar />),
  createLinkArray("This Week", "discover/thisWeek", <AiFillFire />),
  createLinkArray("Next week", "discover/nextWeek", <TbPlayerTrackNext />),
  createLinkArray("Upcoming Games", "discover/upcoming", <TbPlayerTrackNext />),
];

export default () => {
  return (
    <div className="side-bar">
      <div className="side-bar__link">
        <NavLink to={"#"}>Home</NavLink>
      </div>
      <div className="side-bar__link">
        <NavLink to={"discover/allTime"}>All Games</NavLink>
      </div>
      <ItemsBlock title="Discovery" linksArray={linksReleases} />
    </div>
  );
};
