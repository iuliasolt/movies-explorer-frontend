import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import { useEffect, useState } from "react";
import { filterLength, filterMovies } from "../../utils/hooks/MoviesFilter";

const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
  const [filterMovie, setFilterMovie] = useState(savedMovies);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function onSearch(query) {
    setSearchQuery(query);
  }

  function handleMinMovies() {
    setCheckboxActive(!checkboxActive);
  }

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilterMovie(checkboxActive ? filterLength(moviesList) : moviesList);
  }, [savedMovies, checkboxActive, searchQuery]);

  useEffect(() => {
    if (filterMovie.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [filterMovie]);

  return (
    <main className="content">
      <section className="saved-movies">
        <SearchForm onFilter={handleMinMovies} onSearch={onSearch} />
        <MoviesCardList
          savedMovies={savedMovies}
          notFound={notFound}
          isSaveFilms={true}
          filterMovie={filterMovie}
          onDeleteMovie={onDeleteMovie}
        />
      </section>
    </main>
  );
};

export default SavedMovies;
