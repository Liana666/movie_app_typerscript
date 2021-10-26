import * as axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/movie/popular?';
const genreUrl = 'https://api.themoviedb.org/3/genre/movie/list?';
const searchUrl = `https://api.themoviedb.org/3/search/movie?`
const key = 'api_key=d495d35d47c329b48d81d83ed0f10265';
const lang = '&language=ru-RU';
const region = '&region=RU';
const query = '&query='



export const getMovies = () => {
    return axios.get(baseUrl + key + lang + region)
}


export const getGenres = () => {
    return axios.get(genreUrl + key + lang + region)
}

export const searchMovies = (parametr) => {
    return axios.get(searchUrl + query + parametr + key + lang + region)
}
