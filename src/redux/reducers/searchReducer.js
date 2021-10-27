
let initialState = {
   moviesName: ''
}



const searchReducer = (state = initialState, action) => {

   if (action.type === 'GET_NEW_MOVIETITLE') {
      state.moviesName = action.moviesName;

      let newState = { ...state };
      newState.moviesName = state.moviesName;

      return newState;
   }


   return state;

}


export const getNewMovieAC = (moviesName) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });
// export const addNewMovieAC = (newMovies) => ({ type: 'ADD_NEW_MOVIETITLE', newMovies });


export default searchReducer;