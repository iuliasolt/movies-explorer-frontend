import "./MoviesCardList.css";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";
import NoResult from "../NoResult/NoResult";
import MoviesCard from "../MoviesCard/MoviesCard";

import {
  MOVIES_ADD_DESKTOP,
  MOVIES_ADD_MOBILE,
  SCREEN_SIZE_MAX_TABLET,
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_MOBILE,
  SCREEN_SIZE_MIN_TABLET,
  SHOW_MOVIES_DESKTOP,
  SHOW_MOVIES_TABLET,
  SHOW_MOVIES_MOBILE,
  NOT_FOUND,
  SERVER_ERROR,
} from "../../utils/config/config";

const MoviesCardList = ({
  isLoading,
  onSaveMovie,
  isSaveFilms,
  onDeleteMovie,
  savedMovies,
  filterMovie,
  notFound,
  requestErr,
  isLoadingMovies,
}) => {
  const location = useLocation().pathname;
  const [shownMoviesAmount, setShownMoviesAmount] = useState(0);
  const [numberMoviesAdd, setNumberMoviesAdd] = useState(0);

  /*кол-во карточек на странице в зависимотри от разрешения экрана*/
  const shownAmount = () => {
    const display = window.innerWidth;
    if (display > SCREEN_SIZE_DESKTOP) {
      setShownMoviesAmount(SHOW_MOVIES_DESKTOP);
      setNumberMoviesAdd(0);
    } else if (
      display > SCREEN_SIZE_MIN_TABLET &&
      display < SCREEN_SIZE_MAX_TABLET
    ) {
      setShownMoviesAmount(SHOW_MOVIES_TABLET);
      setNumberMoviesAdd(0);
    } else if (display < SCREEN_SIZE_MOBILE) {
      setShownMoviesAmount(SHOW_MOVIES_MOBILE);
      setNumberMoviesAdd(0);
    }
  };

  /*кол-во карточек при открытии страницы*/

  useEffect(() => {
    shownAmount();
  }, [isLoadingMovies]);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("resize", shownAmount);
    }, 500);
    return () => {
      window.removeEventListener("resize", shownAmount);
    };
  }, []);

  const loadMovies = () => {
    const display = window.innerWidth;
    if (display > SCREEN_SIZE_DESKTOP) {
      setNumberMoviesAdd(numberMoviesAdd + MOVIES_ADD_DESKTOP);
    } else if (
      display > SCREEN_SIZE_MIN_TABLET &&
      display < SCREEN_SIZE_MAX_TABLET
    ) {
      setNumberMoviesAdd(numberMoviesAdd + MOVIES_ADD_MOBILE);
    } else if (display < SCREEN_SIZE_MOBILE) {
      setNumberMoviesAdd(numberMoviesAdd + MOVIES_ADD_MOBILE);
    }
  };

  return (
    <section className="cards">
      {isLoading && <Preloader />}
      {!isLoading && !requestErr && !notFound && (
        <>
          {location === "/saved-movies" ? (
            <>
              <ul className="card__list">
                {filterMovie.map((movie) => {
                  return (
                    <MoviesCard
                      movie={movie}
                      key={isSaveFilms ? movie._id : movie.id}
                      onSaveMovie={onSaveMovie}
                      onDeleteMovie={onDeleteMovie}
                      isSaveFilms={isSaveFilms}
                      savedMovies={savedMovies}
                    />
                  );
                })}
              </ul>
            </>
          ) : (
            <>
              <ul className="card__list">
                {filterMovie
                  .slice(0, shownMoviesAmount + numberMoviesAdd)
                  .map((movie) => {
                    return (
                      <MoviesCard
                        movie={movie}
                        key={isSaveFilms ? movie._id : movie.id}
                        onSaveMovie={onSaveMovie}
                        onDeleteMovie={onDeleteMovie}
                        isSaveFilms={isSaveFilms}
                        savedMovies={savedMovies}
                      />
                    );
                  })}
              </ul>
              <div className="movies__button-container">
                {filterMovie.length > numberMoviesAdd ? (
                  <button
                    onClick={loadMovies}
                    type="button"
                    className="movies__load-button"
                  >
                    Ещё
                  </button>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </>
      )}
      {notFound && !isLoading && <NoResult message={NOT_FOUND} />}
      {requestErr && !isLoading && <NoResult message={SERVER_ERROR} />}
    </section>
  );
};

export default MoviesCardList;
