import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ link, alt, title, length }) => {
  const location = useLocation().pathname;
  const [isSave, setIsSave] = useState(false);

  const handleSave = () => {
    setIsSave(!isSave);
  };

  const handleDeleteCard = (evt) => {
    evt.target.closest(".card").remove();
  };

  return (
    <li className="card">
      <div className="card__container">
        {location === "/movies" ? (
          <button
            className={`card__button-save ${!isSave && `card__button-save_active`}`}
            type="button"
            onClick={handleSave}
          >
            Сохранить
          </button>
        ) : (
          ""
        )}
        {location === "/saved-movies" ? (
          <button
            className="card__button-remove"
            type="button"
            onClick={handleDeleteCard}
          />
        ) : (
          ""
        )}
        <div
          className={`card__cover-tip ${isSave && `card__cover-tip_active`}`}
        />
        <a className="card__link" href={"1"} target="_blank" rel="noreferrer">
          <img className="card__image" src={link} alt={alt} />
        </a>
      </div>
      <div className="card__date-container">
        <h2 className="card__title">{title}</h2>
        <div className="card__length-container">
          <p className="card__length-value">{length}</p>
        </div>
      </div>
    </li>
  );
};

export default MoviesCard;
