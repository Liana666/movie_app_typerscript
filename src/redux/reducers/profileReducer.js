let initialState = {
    favoriteMovies: [],
    titleMovies: [],
    isClickFavoriteIcon: false

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return { ...state, favoriteMovies: [...state.favoriteMovies, action.favoriteMovies] }
        }

        case "ADD_TITLE": {
            return { ...state, titleMovies: [...state.titleMovies, ...action.titleMovies] }
        }

        case "CHANGE_FAVORITE_ICON": {
            return { ...state, isClickFavoriteIcon: action.isClickFavoriteIcon }
        }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const addTitleAC = (titleMovies) => ({ type: "ADD_TITLE", titleMovies });
export const changeFavoriteIconAC = (isClickFavoriteIcon) => ({ type: "CHANGE_FAVORITE_ICON", isClickFavoriteIcon });

export const addFavoriteMoviesThunk = (path, title) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(path));
    dispatch(addTitleAC(title));
    // dispatch(changeFavoriteIconAC(icon));
};


export default profileReducer;
