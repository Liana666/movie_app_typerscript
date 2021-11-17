import plus from "../../img/plus.png";

let initialState = {
    favoriteMovies: [],
    favoriteId: []

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.favoriteMovies]
            }
        }

        case "ADD_FAVORITE_ID": {
            return {
                ...state,
                favoriteId: [...state.favoriteId, action.favoriteId]
            }
        }

        case "ADD_FAVORITE_ICONS": {
            return {
                ...state,
                favoriteMovies: {
                    icon: action.icon
                }
            }
        }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const addFavoriteIdAC = (favoriteId) => ({ type: "ADD_FAVORITE_ID", favoriteId });
export const addFavoriteIconsAC = (icon) => ({ type: "ADD_FAVORITE_ICONS", icon });

export const addFavoriteMoviesThunk = (favoriteMovies, favoriteId) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
    // dispatch(addFavoriteIconsAC(icon));
};


export default profileReducer;
