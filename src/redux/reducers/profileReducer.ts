type RatedType = {
    vote: number
    img: string
}

type initialStateType = {
    vote: Array<number>
    favoriteMovies: Array<string>
    favoriteId: Array<number>
    viewed: Array<number>
    rated: Array<RatedType> | Array<number>
}

let initialState: initialStateType = {
    vote: [1, 2, 3, 4, 5],
    favoriteMovies: [],
    favoriteId: [],
    viewed: [],
    rated: []
}

const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {

        case "ADD_FAVORITE_MOVIES": {
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.favoriteMovies]
            }
        }

        case "REMOVE_FAVORITE_MOVIES": {

            const favoriteMovies = state.favoriteMovies.filter(
                (item) => item !== action.movieImg
            )

            return {
                ...state,
                favoriteMovies: favoriteMovies,
            }
        }

        case "ADD_FAVORITE_ID": {
            return {
                ...state,
                favoriteId: [...state.favoriteId, action.favoriteId]
            }
        }

        case "REMOVE_FAVORITE_ID": {
            const favoriteId = state.favoriteId.filter(
                (item) => item !== action.movieId
            )

            return {
                ...state,
                favoriteId: favoriteId
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

        // case "ADD_ASSESSED": {
        //     return {
        //         ...state,
        //         assessed: [...state.assessed, action.assessed]
        //     }
        // }

        default:
            return state;
    }
}

export const addFavoriteMoviesAC = (favoriteMovies: Array<string>) => ({ type: "ADD_FAVORITE_MOVIES", favoriteMovies });
export const removeFavoriteMoviesAC = (movieImg: string) => ({ type: "REMOVE_FAVORITE_MOVIES", movieImg });
export const addFavoriteIdAC = (favoriteId: Array<number>) => ({ type: "ADD_FAVORITE_ID", favoriteId });
export const removeFavoriteIdAC = (movieId: number) => ({ type: "REMOVE_FAVORITE_ID", movieId });
export const addViewedAC = (viewed: Array<number>) => ({ type: "ADD_VIEWED", viewed });
export const addRatedAC = (rated: Array<number> | Array<RatedType>) => ({ type: "ADD_RATED", rated });

/*Add favorite movies */
export const addFavoriteMoviesThunk = (favoriteMovies: Array<string>, favoriteId: Array<number>) => (dispatch: any) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
};

/*Add viewed movies */
export const addViewedThunk = (viewed: Array<number>) => (dispatch: any) => {
    dispatch(addViewedAC(viewed));
};

/*Add rated movies */
export const addRatedThunk = (rated: Array<number> | Array<RatedType>) => (dispatch: any) => {
    dispatch(addRatedAC(rated));
};


export default profileReducer;
