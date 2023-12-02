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
    (saveMovies) => saveMovies.movieId === movie.id
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

  const convertLength = (length) => {
    const hours = Math.floor(length / 60);
    const minutes = length % 60;

    if (hours > 0) {
      return `${hours}ч ${minutes}м`;
    } else {
      return `${minutes}м`;
    }
  };

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
              type="button"
            >
              Сохранить
            </button>
            <div
              className={`card__cover-tip ${
                isSave && `card__cover-tip_active`
              }`}
              onClick={handleSave}
            />
          </>
        ) : (
          <button
            className="card__button-remove"
            type="button"
            onClick={handleDeleteCard}
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
            alt={movie.nameRu}
          />
        </a>
      </div>
      <div className="card__date-container">
        <h2 className="card__title">{movie.nameRu}</h2>
        <div className="card__length-container">
          <p className="card__length-value">{convertLength(movie.length)}</p>
        </div>
      </div>
    </li>
  );
};
export default MoviesCard;
