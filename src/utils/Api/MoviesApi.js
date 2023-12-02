import { MOVIES_API_URL } from "../config/config";

  /*Проверка ошибки*/
export const handleResponse = (res) => {
    if (res.ok) {
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}

/*Получение массива исходных карточек*/
export const getMovies = () => {
    return fetch(`${MOVIES_API_URL}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => handleResponse(res));
}