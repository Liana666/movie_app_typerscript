import { getMovies } from "../../api/api";
import { filterGenresMovies } from "../../api/api";
import { searchMovies } from "../../api/api";

let initialState = {
   moviesName: '',
   genre: 0,
   popular: [],
   movies: [],
   totalPages: 1,
   currentPage: 1,
   years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2002, 2001, 2000],
   year: 0
}

const mainReducer = (state = initialState, action) => {

   switch (action.type) {

      case "ADD_GENRE":
         return { ...state, genre: action.genre }

      case "ADD_YEAR":
         return { ...state, year: action.year }

      case "ADD_GENRES":
         return { ...state, genres: action.genres }

      case "ADD_POPULAR":
         return { ...state, popular: action.popular }

      case "ADD_MOVIES":
         return {
            ...state, popular: action.popular, movies: action.movies
         }

      case 'GET_CURRENT_PAGE':
         return { ...state, currentPage: action.currentPage }

      case 'GET_TOTAL_PAGES':
         return { ...state, totalPages: action.totalPages }

      case 'GET_NEW_MOVIETITLE':
         return { ...state, moviesName: action.moviesName }

      default:
         return state;
   }
}


export const addGenreAC = (genre) => ({ type: 'ADD_GENRE', genre });
export const addYearAC = (year) => ({ type: 'ADD_YEAR', year });
export const addMoviesAC = (movies) => ({ type: 'ADD_MOVIES', movies });
export const addPopularAC = (popular) => ({ type: 'ADD_POPULAR', popular });
export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });
export const getNewMovieAC = (moviesName) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });

export const getMoviesThunk = (currentPage, genre, year) => async dispatch => {
   dispatch(addPopularAC([]))

   filterGenresMovies(currentPage, genre, year)
      .then(response => {
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(response.data.results));
      });
};

export const getPopularThunk = () => async dispatch => {
   getMovies()
      .then(response => {
         dispatch(addPopularAC(response.data.results));
      });

};

export const changePageThunk = (currentPage, genre, years) => async dispatch => {
   dispatch(getNewPageAC(currentPage));
   filterGenresMovies(currentPage, genre, years)
      .then(response => {
         let data = response.data.results;
         dispatch(addMoviesAC(data));
      });
};

export const searchMoviesThunk = (moviesName, currentPage) => async dispatch => {
   dispatch(getNewPageAC(currentPage));
   searchMovies(moviesName, currentPage)
      .then(response => {
         let data = response.data.results;
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(data));
      });
}


export default mainReducer;