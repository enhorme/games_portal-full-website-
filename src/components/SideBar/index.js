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

const linkArr = [
  createLinkArray("Last 30 days", "#", <AiFillStar />),
  createLinkArray("This Week", "#", <AiFillFire />),
  createLinkArray("Next week", "#", <TbPlayerTrackNext />),
  createLinkArray("Release calendar", "#", <AiOutlineCalendar />),
];

export default () => {
  return (
    <div className="side-bar">
      <div className="side-bar__link">
        <NavLink to={"#"}>Home</NavLink>
      </div>
      <div className="side-bar__link">
        <NavLink to={"#"}>All Games</NavLink>
      </div>
      <ItemsBlock title="New Releases" linksArray={linkArr} />
    </div>
  );
};
