
let initialState = {
   moviesName: 'название фильма',
   newMovies: []
}


const searchReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_NEW_MOVIETITLE':
         return {
            ...state,
            moviesName: action.newMovieReques
         }

      // case 'ADD_NEW_MOVIETITLE':
      //    return {
      //       ...state,
      //       newMovies: action.newMovies
      //    }


      default:
         return state;
   }
}



export const getNewMovieAC = (newMovieRequest) => ({ type: 'GET_NEW_MOVIETITLE', newMovieRequest });
// export const addNewMovieAC = (newMovies) => ({ type: 'ADD_NEW_MOVIETITLE', newMovies });


export default searchReducer;