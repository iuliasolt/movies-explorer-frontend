import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import cardImage from "../../images/card.png";

const Movies = () => {
  return (
    <main className="content">
      <section className="movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard
            link={cardImage}
            alt="Карточка"
            title="Книготорговцы"
            length="1ч 17м"
          />
        </MoviesCardList>
        <div className="movies__button-container">
          <button className="movies__load-button" type="button">
            Ещё
          </button>
        </div>
      </section>
    </main>
  );
};

export default Movies;
