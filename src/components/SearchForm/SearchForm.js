import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
    return (
        <section className="search">
            <form className="search__form" name="search-movie">
                <div className="search__form-container">
                    <input className="search__input"
                    type="text"
                    placeholder="Фильм"
                    required
                    />
                    <button className="search__submit"
                    type="submit" />
                </div>
                <FilterCheckbox title="Короткометражки" />
                <div className="search__line" />
            </form>
        </section>
    )
}

export default SearchForm;