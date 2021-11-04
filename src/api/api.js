import * as axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?';
const filterUrl = 'https://api.themoviedb.org/3/discover/movie?';
const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?';
const key = 'api_key=d495d35d47c329b48d81d83ed0f10265';
const lang = '&language=ru-RU';
const region = '&region=RU';



export const getMovies = () => {
    return axios.get(baseUrl + key + lang + region);
};

export const filterGenresMovies = (page, genre) => {
    return axios.get(filterUrl + key + `&page=${page}&with_genres=${genre}` + lang + region);
};


// export const filterGenresMovies = (page, genre) => {
//     return axios.get(filterUrl + key + `&sort_by=release_date.desc$page=${page}&with_genres=${genre}` + lang + region);
// }

export const getGenres = () => {
    return axios.get(genreUrl + key + lang + region);
};

export const searchMovies = (parametr, page) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?page=${page}&query=${parametr}&api_key=d495d35d47c329b48d81d83ed0f10265&language=ru-RU&region=RU`);
};
