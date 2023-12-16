import "./MoviesCard.css";
import { useState, useEffect } from "react";

const MoviesCard = ({
  movie,
  onSaveMovie,
  isSaveFilms,
  onDeleteMovie,
  savedMovies,
}) => {
  const isLiked = savedMovies.some(
    (saveMovie) => saveMovie.movieId === movie.id
  );
  const [isSave, setIsSave] = useState(isLiked);

  useEffect(() => {
    setIsSave(isLiked);
  }, [isLiked]);

  const handleSave = () => {
    if (isSave) {
      onDeleteMovie(movie);
    } else {
      onSaveMovie(movie);
    }
    setIsSave(!isSave);
  };

  const handleDeleteCard = () => {
    onDeleteMovie(movie);
  };

  function convertLength(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 0) {
      return `${hours}ч ${minutes}м`;
    } else {
      return `${minutes}м`;
    }
  }

  return (
    <li className="card" id={movie.id}>
      <div className="card__container">
        {!isSaveFilms ? (
          <>
            <button
              className={`card__button-save ${
                !isSave && `card__button-save_active`
              }`}
              onClick={handleSave}
            >
              Сохранить
            </button>
            <div
              onClick={handleSave}
              role="button"
              className={`card__cover-tip ${
                isSave && `card__cover-tip_active`
              }`}
            />
          </>
        ) : (
          <button
            type="button"
            onClick={handleDeleteCard}
            className="card__button-remove"
          />
        )}

        <a
          className="card__link"
          href={movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="card__image"
            src={
              isSaveFilms
                ? movie.img
                : `https://api.nomoreparties.co/${movie.image.url}`
            }
            alt={movie.nameRU}
          />
        </a>
      </div>
      <div className="card__date-container">
        <h2 className="card__title">{movie.nameRU}</h2>
        <div className="card__length-container">
          <p className="card__length-value">{convertLength(movie.duration)}</p>
        </div>
      </div>
    </li>
  );
};
export default MoviesCard;
