import { MAIN_API_URL, CARDS_API_URL } from "../config/config";

/*Проверка ошибки*/
export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return (res.json())
    .then((e) => {
      const error = new Error(e.message);
      error.status = res.status;
      throw error;
    });
  }
};

/*Регистрация*/
export const register = (name, email, password) => {
  return fetch(`${MAIN_API_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => handleResponse(res));
};

/*Авторизация*/
export const login = (email, password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => handleResponse(res));
};

/*Проверка токена*/
export const getContent = (token) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

/*Обновление профиля*/
export const updateProfile = ({ name, email }) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => handleResponse(res));
};

/*Сохраненные карточки*/
export const getSavedMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => handleResponse(res));
};

/*Удаление карточки*/
export const deleteCard = (movieId) => {
  return fetch(`${MAIN_API_URL}/movies/${movieId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => handleResponse(res));
};

/*Сохранение карточки на сервере*/

export const saveCardMovies = (movie) => {
  return fetch(`${MAIN_API_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${CARDS_API_URL}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${CARDS_API_URL}${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then((res) => handleResponse(res));
};

export const getUserById = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((res) => handleResponse(res));
};
