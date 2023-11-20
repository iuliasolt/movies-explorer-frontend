import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import SearchForm from "../SearchForm/SearchForm";
import cardImage from "../../images/card.png";

const SavedMovies = () => {
    return (
        <main className="content">
            <section className="saved-movies">
                <SearchForm />
                <MoviesCardList>
                <MoviesCard
                link={cardImage}
                alt="Карточка"
                title="Книготорговцы"
                length="1ч 17м"
                />
                
                <MoviesCard
                link={cardImage}
                alt="Карточка"
                title="Книготорговцы"
                length="1ч 17м"
                />
                <MoviesCard
                link={cardImage}
                alt="Карточка"
                title="Книготорговцы"
                length="1ч 17м"
                />
                </MoviesCardList>
            </section>
        </main>
    )
}

export default SavedMovies;