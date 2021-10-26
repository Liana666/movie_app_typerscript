let initialState = {
   moviesName: ''
}

const headerReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'GET_NEW_MOVIETITLE':
         return {
            ...state,
            moviesName: action.newMovieRequest
         }

      default:
         return state;

   }
}


export const getNewMovieAC = (newMovieRequest) => ({ type: 'GET_NEW_MOVIETITLE', newMovieRequest });


