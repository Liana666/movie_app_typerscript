let initialState = {
   currentPage: 1,
   movies: []
}

const paginationReducer = (state = initialState, action) => {

   switch (action.type) {
      case 'GET_CURRENT_PAGE':
         return {
            ...state,
            currentPage: action.currentPage
         }

      case 'ADD_MOVIES':
         return { ...state, movies: action.movies }

      default:
         return state;
   }

   // if (action.type === 'GET_CURRENT_PAGE') {
   //    state.currentPage = action.currentPage;

   //    let newState = { ...state };
   //    newState.currentPage = state.currentPage;

   //    return newState;
   // }

   // else if (action.type === 'ADD_MOVIES') {
   //    state.movies = action.movies;

   //    let newState = { ...state };
   //    newState.movies = action.movies;

   //    return newState;
   // }


}


export const getNewPageAC = (currentPage) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const addMoviesAC = (movies) => ({ type: 'ADD_MOVIES', movies });
export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });
export const getNewMovieAC = (moviesName) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });

export default paginationReducer;