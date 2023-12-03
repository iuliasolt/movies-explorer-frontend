const HEADEREDPOINTS = ["/", "/movies", "/saved-movies", "/profile"];

const FOOTEREDPOINTS = ["/movies", "saved-movies", "/"];

const MAIN_API_URL = "https://api.movies-api.nomoredomainsrocks.ru";
const CARDS_API_URL = "https://api.nomoreparties.co";


const MOVIES_API_URL = "https://api.nomoreparties.co/beatfilm-movies";

const NOT_FOUND = "Ничего не найдено";

const SERVER_ERROR =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного или попробуйте еще раз.";

const PROFILE_UPDATE_ERROR = "При обновлении профиля произошла ошибка";
const PROFILE_UPDATE_SUCCESSFULLY = "Профиль успешно обновлен";
const KEYWORD_NEED = "Нужно ввести ключевое слово";
const MOVIE_NAME = "Фильм"

const MIN_MOVIES_LENGTH = 40;
const SCREEN_SIZE_MAX_TABLET = 1200;
const SCREEN_SIZE_DESKTOP = 1199;
const SCREEN_SIZE_MOBILE = 768;
const SCREEN_SIZE_MIN_TABLET = 767;
const SHOW_MOVIES_DESKTOP = 12;
const SHOW_MOVIES_TABLET = 8;
const SHOW_MOVIES_MOBILE = 5;
const MOVIES_ADD_DESKTOP = 3;
const MOVIES_ADD_MOBILE = 2;

export {
  HEADEREDPOINTS,
  FOOTEREDPOINTS,
  MAIN_API_URL,
  CARDS_API_URL,
  MOVIES_API_URL,
  NOT_FOUND,
  SERVER_ERROR,
  PROFILE_UPDATE_ERROR,
  PROFILE_UPDATE_SUCCESSFULLY,
  KEYWORD_NEED,
  MIN_MOVIES_LENGTH,
  SCREEN_SIZE_MAX_TABLET,
  SCREEN_SIZE_DESKTOP,
  SCREEN_SIZE_MOBILE,
  SCREEN_SIZE_MIN_TABLET,
  SHOW_MOVIES_DESKTOP,
  SHOW_MOVIES_TABLET,
  SHOW_MOVIES_MOBILE,
  MOVIES_ADD_DESKTOP,
  MOVIES_ADD_MOBILE,
  MOVIE_NAME
};
