import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterGamesList } from "src/store/actions";

export default () => {
  const [value, setValue] = useState("-added");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterGamesList(value));
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="filter">
      <select className="filter__select" value={value} onChange={handleChange}>
        <option value="name">Name</option>
        <option value="-created">Date added</option>
        <option value="-released">Release date</option>
        <option value="-metacritic">Metacritic</option>
        <option value="-added">Popularity</option>
        <option value="-rating">Average rating</option>
      </select>
    </div>
  );
};
