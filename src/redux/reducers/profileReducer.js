import plus from "../../img/plus.png";

let initialState = {
    favoriteMovies: {
        img: [],
        icon: plus
    }

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return {
                ...state,
                favoriteMovies: {
                    img: [...state.favoriteMovies.img, action.img]
                }
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

export const addFavoriteMoviesAC = (img) => ({ type: "ADD_FAVORITE_MOVIES", img });
export const addFavoriteIconsAC = (icon) => ({ type: "ADD_FAVORITE_ICONS", icon });

export const addFavoriteMoviesThunk = (img, icon) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(img));
    dispatch(addFavoriteIconsAC(icon));
};


export default profileReducer;
