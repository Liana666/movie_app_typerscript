type initialStateType = {
   moviesName: string
   newMovies: Array<string>
}

let initialState: initialStateType = {
   moviesName: 'название фильма',
   newMovies: []
}


const headerReducer = (state = initialState, action: any) => {
   switch (action.type) {
      case 'GET_NEW_MOVIETITLE':
         return {
            ...state,
            moviesName: action.newMovieReques
         }

      default:
         return state;
   }
}

export const getNewMovieAC = (newMovieRequest: string) => ({ type: 'GET_NEW_MOVIETITLE', newMovieRequest });


export default headerReducer;