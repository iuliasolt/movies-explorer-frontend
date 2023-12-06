import { MIN_MOVIES_LENGTH } from "../config/config";

export function filterMovies(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRU = String(movie.nameRU).toLowerCase().trim();
    const movieEN = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRU.indexOf(userQuery) !== -1 || movieEN.indexOf(userQuery) !== -1;
  });
  return moviesQuery;
}

export function filterLength(movies) {
        return movies.filter((movie) => movie.duration < MIN_MOVIES_LENGTH);
}
