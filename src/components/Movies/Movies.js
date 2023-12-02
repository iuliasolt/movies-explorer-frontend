import "./Movies.css";

import { useEffect, useState } from "react";
import { filterLength, filterMovies } from "../../utils/hooks/MoviesFilter";
import SearchForm from "../SearchForm/SearchForm";
/* import MoviesCard from "../MoviesCard/MoviesCard";*/
import MoviesCardList from "../MoviesCardList/MoviesCardList";
/* import cardImage from "../../images/card.png";*/
import * as moviesApi from "../../utils/Api/MoviesApi";

const Movies = ({ savedMovies, onSaveMovie, onDeleteMovie }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filterMovie, setFilterMovie] = useState([]);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [requestErr, setRequestErr] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);

  const getFilterMovies = (movies, searchQuery, isCheckbox) => {
    const moviesList = filterMovies(movies, searchQuery, isCheckbox);
    setInitialMovies(moviesList);
    setFilterMovie(isCheckbox ? filterLength(moviesList) : moviesList);
    localStorage.setItem("movies", JSON.stringify(moviesList));
    localStorage.setItem("allMovies", JSON.stringify(movies));
  };

  const handleFilterCheckbox = () => {
    setCheckboxActive(!checkboxActive);
    if(!checkboxActive) {
      if(filterLength(initialMovies).length === 0) {
        setFilterMovie(filterLength(initialMovies));
      } else {
        setFilterMovie(filterLength(initialMovies))
      } 
        
      }
      else {
        setFilterMovie(initialMovies);
      }
      localStorage.setItem('minMovies', !checkboxActive);
    
  }

  const handleSearchMovies = (searchQuery) => {
    setIsLoadingMovies(searchQuery)
    localStorage.setItem('moviesSearch', searchQuery);
    localStorage.setItem('minMovies', checkboxActive);
    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'))
      getFilterMovies(movies, searchQuery, checkboxActive)
    } else {
      setIsLoading(true);
      moviesApi.getMovies()
      .then((cardsData) => {
        getFilterMovies(cardsData, searchQuery, checkboxActive);
        setRequestErr(false);
      })
      .catch((e) => {
        setRequestErr(true);
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      })
    }
  }

  useEffect(() => {
    if (localStorage.getItem('minMovies') === 'true') {
      setCheckboxActive(true);
    }else {
      setCheckboxActive(false);
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('minMovies') === 'true') {
        setFilterMovie(filterLength(movies));
      } else {
        setFilterMovie(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movieSearch')) {
      if (filterMovie.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } else {
      setNotFound(false)
    }
  }, [filterMovie]);

return (
    <main className="content">
      <section className="movies">
        <SearchForm 
        onSearch={handleSearchMovies}
        onFilter={handleFilterCheckbox}
        checkboxActive={checkboxActive}
        />
        <MoviesCardList
        savedMovies={savedMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        filterMovie={filterMovie}
        isSaveFilms={false}
        requestErr={requestErr}
        notFound={notFound}
        isLoading={isLoading}
        isLoadingMovies={setIsLoadingMovies}
        />
      </section>
    </main>
  );
};

export default Movies;
