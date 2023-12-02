import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { KEYWORD_NEED, MOVIE_NAME } from "../../utils/config/config";

const SearchForm = ({ checkboxActive, onSearch, onFilter }) => {
  const [isError, setIsError] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const location = useLocation.pathname;

  useEffect(() => {
    if (location === "/movies") {
      setSearchValue(location.getItem("movieSearch"));
    }
    if (location === "/saved-movies") {
      setSearchValue("");
    }
  }, [location]);

  const handleSearch = (evt) => {
    setSearchValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (searchValue.trim().length === 0) {
      setIsError(true);
    } else {
      setIsError(false);
      onSearch(searchValue);
    }
  };

  return (
    <section className="search">
      <form
        className="search__form"
        name="search-movie"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="search__form-container">
          <input
            className={`search__input ${isError && "search__input_error"}`}
            type="text"
            placeholder={isError ? KEYWORD_NEED : MOVIE_NAME}
            value={searchValue || ""}
            onChange={handleSearch}
            minLength="1"
            required
          />
          <button className="search__submit" type="submit" />
        </div>
        <FilterCheckbox
          title="Короткометражки"
          onFilter={onFilter}
          checkboxActive={checkboxActive}
        />
        <div className="search__line" />
      </form>
    </section>
  );
};

export default SearchForm;
