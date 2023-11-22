import "./MoviesCardList.css";


const MoviesCardList = ({ children }) => {
    return (
        <section className="cards">
            <ul className="card__list">{children}</ul>
        </section>
    )
}

export default MoviesCardList;