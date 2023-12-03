import { MIN_MOVIES_LENGTH } from "../config/config";

export function filterMovies(movies, query) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRU = String(movie.nameRU).toLowerCase().trim();
    const movieEN = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRU.indexOf(userQuery) !== -1 || movieEN.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}

export function filterLength(movies) {
        return movies.filter((movie) => movie.length < MIN_MOVIES_LENGTH);
}
