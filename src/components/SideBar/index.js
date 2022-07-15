import React from "react";
import { NavLink } from "react-router-dom";
import ItemsBlock from "./ItemsBlock";

import { AiFillStar, AiFillFire } from "react-icons/ai";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useSelector } from "react-redux";
import UserProfile from "src/components/UserProfile";

const createLinkArray = (name, route, icon) => ({
  name,
  route,
  icon,
});

const linksReleases = [
  createLinkArray("New Games", "discover/new-Games", <TbPlayerTrackNext />),
  createLinkArray("Last 30 days", "discover/last-Month", <AiFillStar />),
  createLinkArray("This Week", "discover/this-Week", <AiFillFire />),
  createLinkArray("Next week", "discover/next-Week", <TbPlayerTrackNext />),
  createLinkArray("Upcoming Games", "discover/upcoming", <TbPlayerTrackNext />),
];

export default () => {
  return (
    <div className="side-bar">
      <UserProfile />
      <div className="side-bar__link">
        <NavLink to={"/"}>Home</NavLink>
      </div>
      <div className="side-bar__link">
        <NavLink to={"discover/all-Time"}>All Games</NavLink>
      </div>
      <ItemsBlock title="Discovery" linksArray={linksReleases} />
    </div>
  );
};
