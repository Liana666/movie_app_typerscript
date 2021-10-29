let initialState = {
   genre: ''
}

const mainReducer = (state = initialState, action) => {

   switch (action.type) {

      case "ADD_GENRE":
         return { ...state, genre: action.genre }

      default:
         return state;
   }
}


export const addGenreAC = (genre) => ({ type: 'ADD_GENRE', genre });

export default mainReducer;