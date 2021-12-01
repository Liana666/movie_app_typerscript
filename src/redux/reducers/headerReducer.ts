const GET_NEW_MOVIETITLE = "GET_NEW_MOVIETITLE";

type initialStateType = {
   moviesName: string
   newMovies: Array<string>
}

let initialState: initialStateType = {
   moviesName: 'название фильма',
   newMovies: []
}


const headerReducer = (state = initialState, action: ActionType) => {
   switch (action.type) {
      case GET_NEW_MOVIETITLE:
         return {
            ...state,
            moviesName: action.newMovieRequest
         }

      default:
         return state;
   }
}

type ActionType = {
   type: typeof GET_NEW_MOVIETITLE
   newMovieRequest: string
}

export const getNewMovieAC = (newMovieRequest: string) => ({ type: GET_NEW_MOVIETITLE, newMovieRequest });


export default headerReducer;