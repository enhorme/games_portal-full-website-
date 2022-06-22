import React from "react";
import { NavLink } from "react-router-dom";

export default ({ title, linksArray }) => {
  return (
    <div className="items-block">
      <div className="items-block__title">{title}</div>
      <ul className="items-block__list">
        {linksArray.map((i, idx) => (
          <li key={idx} className="items-block__item">
            <div className="items-block__icon">{i.icon}</div>
            <NavLink to={i.route} className="items-block__link">
              {i.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
