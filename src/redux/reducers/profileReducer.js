
let initialState = {
    vote: [1, 2, 3, 4, 5],
    favoriteMovies: [],
    favoriteId: [],
    viewed: [],
    rated: [],
    currentClass: 'box2',
    isTrue: false
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
                rated: [...state.rated, action.rated]
            }
        }

        case "ADD_ASSESSED": {
            return {
                ...state,
                assessed: [...state.assessed, action.assessed]
            }
        }

        case "ADD_CLASS_ACTIVE": {
            return {
                ...state,
                currentClass: action.currentClass
            }
        }

        case "SET_IS_TRUE": {
            return {
                ...state,
                isTrue: action.isTrue
            }
        }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const addFavoriteIdAC = (favoriteId) => ({ type: "ADD_FAVORITE_ID", favoriteId });
export const addViewedAC = (viewed) => ({ type: "ADD_VIEWED", viewed });
export const addRatedAC = (rated) => ({ type: "ADD_RATED", rated });
export const addClassAC = (currentClass) => ({ type: "ADD_CLASS_ACTIVE", currentClass });
export const setIsTrueAC = (isTrue) => ({ type: "SET_IS_TRUE", isTrue });

export const addFavoriteMoviesThunk = (favoriteMovies, favoriteId) => (dispatch) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
};

export const addViewedThunk = (viewed) => (dispatch) => {
    dispatch(addViewedAC(viewed));
};

export const addRatedThunk = (rated) => (dispatch) => {
    dispatch(addRatedAC(rated));
};

export const addClassThunk = (currentClass) => (dispatch) => {
    dispatch(addClassAC(currentClass));
};

export const setIsTrueThunk = (isTrue) => (dispatch) => {
    dispatch(setIsTrueAC(isTrue));
}



export default profileReducer;
