import { MIN_MOVIES_LENGTH } from "../config/config";

export function filterMovies(movies, query) {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRu).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1;
  });
  return moviesByQuery;
}

export function filterLength(movies) {
        return movies.filter((movie) => movie.length < MIN_MOVIES_LENGTH);
}
