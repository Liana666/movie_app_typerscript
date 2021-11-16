let initialState = {
    favoriteMovies: []

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return { ...state, favoriteMovies: state.favoriteMovies.push(action.favoriteMovies) }
        }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies })

export const addFavoriteMoviesThunk = (img) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(img));
}


export default profileReducer;
