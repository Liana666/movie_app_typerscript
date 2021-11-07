import { getMovies } from "../../api/api";
import { filterGenresMovies } from "../../api/api";

let initialState = {
   genre: 0,
   popular: [],
   movies: [],
   totalPages: 1,
   currentPage: 1,
   years: 2020
}

const mainReducer = (state = initialState, action) => {

   switch (action.type) {

      case "ADD_GENRE":
         return { ...state, genre: action.genre }

      case "ADD_YEAR":
         return { ...state, genre: action.years }

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
export const addYearAC = (years) => ({ type: 'ADD_YEAR', years });
export const addMoviesAC = (movies) => ({ type: 'ADD_MOVIES', movies });
export const addPopularAC = (popular) => ({ type: 'ADD_POPULAR', popular });
export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });


export const getMoviesThunk = (currentPage, genre, year) => async dispatch => {
   dispatch(addPopularAC([]))

   filterGenresMovies(currentPage, genre, year)
      .then(response => {
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(response.data.results));
      });
};

// export const filterYearMovies = (genre) => async dispatch => {
//    dispatch(addPopularAC([]));

//    if(genre === '') {

//    }
// }

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


export default mainReducer;