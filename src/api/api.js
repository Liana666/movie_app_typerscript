import * as axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?';
const filterUrl = 'https://api.themoviedb.org/3/discover/movie?';
const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?';
const key = 'api_key=d495d35d47c329b48d81d83ed0f10265';
const lang = '&language=ru-RU';
const region = '&region=RU';



export const getMovies = (page) => {
    return axios.get(baseUrl + key + `&page=${page}` + lang + region);
};

export const filterGenresMovies = (page, genre, year) => {
    return axios.get(filterUrl + key + `&page=${page}&with_genres=${genre}&year=${year}` + lang + region);
};

export const filterYearsMovies = (page, year) => {
    return axios.get(filterUrl + key + `&page=${page}&year=${year}` + lang + region);
};


export const getGenres = () => {
    return axios.get(genreUrl + key + lang + region);
};

export const searchMovies = (parametr, page) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?page=${page}&query=${parametr}&api_key=d495d35d47c329b48d81d83ed0f10265&language=ru-RU&region=RU`);
};

export const getCast = (movie_id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?` + key + lang + region);
};

export const getVideo = (movie_id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?` + key);
}