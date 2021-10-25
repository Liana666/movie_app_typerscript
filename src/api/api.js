import * as axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3/movie/';
const key = 'api_key=d495d35d47c329b48d81d83ed0f10265';
const lang = '&language=ru-RU';
const region = '&region=RU';

// const instance = axios.create({
//     baseUrl: 'https://api.themoviedb.org/3/movie/popular',
//     key: 'd495d35d47c329b48d81d83ed0f10265',
//     lang: 'language=ru-RU',
//     region: 'region=RU'


// })

export const getMovies = (parametr) => {
    return axios.get(baseUrl + parametr + key + lang + region)
}


export const getGenres = () => {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?' + key + lang + region)
}
