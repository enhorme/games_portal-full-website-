import React, { useEffect, useState } from "react";
import useDebounce from "src/hooks/useDebounce";
import { getData, searchGamesParams } from "src/api/axios";
import Spinner from "src/components/Spinner";

export default () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  const debouncedSearchValue = useDebounce(value, 500);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(results);

  useEffect(() => {
    if (debouncedSearchValue) {
      const params = searchGamesParams(value);
      getData(params.addUrl, params).then((res) =>
        setResults(res.data.results)
      );
    } else {
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
      {value ? (
        <div className="search__list">
          {results.length ? (
            results.map((element) => (
              <div key={element.id} className="search__list-item">
                <div className="search__list-item-image">
                  <img
                    src={element["background_image"].replace(
                      "media/",
                      "media/resize/640/-/"
                    )}
                    alt=""
                  />
                </div>
                <div className="seach__list-item-name">{element.name}</div>
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
