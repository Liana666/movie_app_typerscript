import { searchMovies } from "../../api/api";

let initialState = {
   moviesName: '',
   totalPages: 1,
   currentPage: 1,
   movies: []
}



const searchReducer = (state = initialState, action) => {

   switch (action.type) {
      case 'GET_CURRENT_PAGE':
         return { ...state, currentPage: action.currentPage }

      case 'ADD_MOVIES':
         return { ...state, movies: action.movies }

      case 'GET_NEW_MOVIETITLE':
         return { ...state, moviesName: action.moviesName }


      case 'GET_TOTAL_PAGES':
         return { ...state, totalPages: action.totalPages }

      default:
         return state;
   }

}

export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const addMoviesAC = (movies) => ({ type: 'ADD_MOVIES', movies });
export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });
export const getNewMovieAC = (moviesName) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });

export const searchMoviesThunk = (moviesName, currentPage) => async dispatch => {
   searchMovies(moviesName, currentPage)
      .then(response => {
         let data = response.data.results;
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(data));
      });
}

export const changePageThunk = (moviesName, currentPage) => async dispatch => {
   dispatch(getNewPageAC(currentPage));
   searchMovies(moviesName, currentPage)
      .then(response => {
         let data = response.data.results;
         dispatch(addMoviesAC(data));

      });
}

export default searchReducer;