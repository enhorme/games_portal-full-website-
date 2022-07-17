import React, { useEffect, useRef, useState } from "react";
import useDebounce from "src/hooks/useDebounce";
import { getData, searchGamesParams } from "src/api/axios";
import Spinner from "src/components/Spinner";
import useOutsideClick from "src/hooks/useOutsideClick";
import { useNavigate } from "react-router-dom";

export default () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const navigate = useNavigate();
  const ref = useOutsideClick(handleClickOutside);

  const debouncedSearchValue = useDebounce(value, 500);

  function handleClickOutside() {
    setResults([]);
    setValue("");
    setOpenSearchBar(false);
  }
  const handleClickGame = (game) => {
    setOpenSearchBar(false);
    navigate(`/details/${game.slug}`, { state: game.id });
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    value ? setOpenSearchBar(true) : setOpenSearchBar(false);
  };

  useEffect(() => {
    if (debouncedSearchValue) {
      const params = searchGamesParams(value);
      getData(params.addUrl, params).then((res) =>
        setResults(res.data.results)
      );
    } else {
      setOpenSearchBar(false);
      setResults([]);
    }
  }, [debouncedSearchValue]);

  return (
    <div className="search">
      <input
        type="search"
        className="header__search__input"
        value={value}
        onChange={handleChange}
      />
      {value && openSearchBar ? (
        <div className="search__list" ref={ref}>
          {results.length ? (
            results.map((game) => (
              <div
                key={game.id}
                className="search__list-item"
                onClick={() => handleClickGame(game)}
              >
                <div className="search__list-item-image">
                  <img
                    src={game["background_image"].replace(
                      "media/",
                      "media/resize/640/-/"
                    )}
                    alt=""
                  />
                </div>
                <div className="seach__list-item-name">{game.name}</div>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      ) : null}
    </div>
  );
};
