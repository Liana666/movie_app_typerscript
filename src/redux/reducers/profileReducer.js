import plus from "../../img/plus.png";

let initialState = {
    vote: [1, 2, 3, 4, 5],
    favoriteMovies: [],
    favoriteId: [],
    viewed: [],
    rated: {
        img: [],
        vote: 0
    }

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

        case "ADD_VIEWED": {
            return {
                ...state,
                viewed: [...state.viewed, action.viewed]
            }
        }

        case "ADD_RATED": {
            return {
                ...state,
                rated: {
                    img: [...state.img, action.img],
                    vote: action.vote
                }
            }
        }

        // case "CHANGE_RATE": {
        //     return {
        //         ...state,
        //         favoriteMovies: action.currentRate
        //     }
        // }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const addFavoriteIdAC = (favoriteId) => ({ type: "ADD_FAVORITE_ID", favoriteId });
export const addViewedAC = (viewed) => ({ type: "ADD_VIEWED", viewed });
export const addRatedAC = (img, vote) => ({ type: "ADD_RATED", img, vote });
// export const changeRatedAC = (currentRate) => ({ type: "CHANGE_RATE", currentRate });

export const addFavoriteMoviesThunk = (favoriteMovies, favoriteId) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
};

export const addViewedThunk = (viewed) => (dispatch) => {
    dispatch(addViewedAC(viewed));
};

export const addRatedThunk = (img, vote) => (dispatch) => {
    dispatch(addViewedAC(img, vote));
};

// export const changeRatedThunk = (currentRate) => (dispatch) => {
//     dispatch(changeRatedAC(currentRate));
// };



export default profileReducer;
