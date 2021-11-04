import { getMovies } from "../../api/api";
import { filterGenresMovies } from "../../api/api";

let initialState = {
   genre: '',
   popular: [],
   movies: [],
   totalPages: 1,
   currentPage: 1
}

const mainReducer = (state = initialState, action) => {

   switch (action.type) {

      case "ADD_GENRE":
         return { ...state, genre: action.genre }

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


      default:
         return state;
   }
}


export const addGenreAC = (genre) => ({ type: 'ADD_GENRE', genre });
export const addMoviesAC = (movies) => ({ type: 'ADD_MOVIES', movies });
export const addPopularAC = (popular) => ({ type: 'ADD_POPULAR', popular });
export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });


export const getMoviesThunk = (currentPage, optionSelected) => async dispatch => {
   dispatch(addPopularAC([]))

   filterGenresMovies(currentPage, optionSelected)
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

export const changePageThunk = (currentPage, optionSelected) => async dispatch => {
   dispatch(getNewPageAC(currentPage));
   filterGenresMovies(currentPage, optionSelected)
      .then(response => {
         let data = response.data.results;
         dispatch(addMoviesAC(data));
      });
}


export default mainReducer;