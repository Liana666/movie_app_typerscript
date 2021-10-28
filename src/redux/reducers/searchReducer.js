
let initialState = {
   moviesName: '',
   totalPages: 1,
}



const searchReducer = (state = initialState, action) => {

   if (action.type === 'GET_NEW_MOVIETITLE') {
      state.moviesName = action.moviesName;

      let newState = { ...state };
      newState.moviesName = state.moviesName;

      return newState;
   }

   else if (action.type === 'GET_TOTAL_PAGES') {
      state.totalPages = action.totalPages;

      let newState = { ...state };
      newState.totalPages = state.totalPages;

      return newState;
   }


   return state;

}

export const getTotalPagesAC = (totalPages) => ({ type: 'GET_TOTAL_PAGES', totalPages });
export const getNewMovieAC = (moviesName) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });


export default searchReducer;