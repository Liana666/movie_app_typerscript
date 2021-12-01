import { ThunkAction } from "redux-thunk";
import { RatedType } from "../../types/type"
import { AppStateType } from "../store";

const ADD_FAVORITE_MOVIES = "ADD_FAVORITE_MOVIES";
const REMOVE_FAVORITE_MOVIES = "REMOVE_FAVORITE_MOVIES";
const ADD_FAVORITE_ID = "ADD_FAVORITE_ID";
const REMOVE_FAVORITE_ID = "REMOVE_FAVORITE_ID";
const ADD_VIEWED = "ADD_VIEWED";
const ADD_RATED = "ADD_RATED";

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

const profileReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {

        case ADD_FAVORITE_MOVIES: {
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.favoriteMovies]
            }
        }

        case REMOVE_FAVORITE_MOVIES: {

            const favoriteMovies = state.favoriteMovies.filter(
                (item) => item !== action.movieImg
            )

            return {
                ...state,
                favoriteMovies: favoriteMovies,
            }
        }

        case ADD_FAVORITE_ID: {
            return {
                ...state,
                favoriteId: [...state.favoriteId, action.favoriteId]
            }
        }

        case REMOVE_FAVORITE_ID: {
            const favoriteId = state.favoriteId.filter(
                (item) => item !== action.movieId
            )

            return {
                ...state,
                favoriteId: favoriteId
            }
        }

        case ADD_VIEWED: {
            return {
                ...state,
                viewed: [...state.viewed, action.viewed]
            }
        }

        case ADD_RATED: {
            return {
                ...state,
                rated: [...state.rated, action.rated]
            }
        }


        default:
            return state;
    }
}

type ActionType = addFavoriteMoviesType | removeFavoriteMoviesType | addFavoriteIdType | removeFavoriteIdType |
    addViewedType | addRateType

type addFavoriteMoviesType = { type: typeof ADD_FAVORITE_MOVIES, favoriteMovies: Array<string> }
export const addFavoriteMoviesAC = (favoriteMovies: Array<string>): addFavoriteMoviesType => ({ type: ADD_FAVORITE_MOVIES, favoriteMovies });

type removeFavoriteMoviesType = { type: typeof REMOVE_FAVORITE_MOVIES, movieImg: string }
export const removeFavoriteMoviesAC = (movieImg: string): removeFavoriteMoviesType => ({ type: REMOVE_FAVORITE_MOVIES, movieImg });

type addFavoriteIdType = { type: typeof ADD_FAVORITE_ID, favoriteId: Array<number> }
export const addFavoriteIdAC = (favoriteId: Array<number>): addFavoriteIdType => ({ type: ADD_FAVORITE_ID, favoriteId });

type removeFavoriteIdType = { type: typeof REMOVE_FAVORITE_ID, movieId: number }
export const removeFavoriteIdAC = (movieId: number): removeFavoriteIdType => ({ type: REMOVE_FAVORITE_ID, movieId });

type addViewedType = { type: typeof ADD_VIEWED, viewed: Array<number> }
export const addViewedAC = (viewed: Array<number>): addViewedType => ({ type: ADD_VIEWED, viewed });

type addRateType = { type: typeof ADD_RATED, rated: Array<number> | Array<RatedType> }
export const addRatedAC = (rated: Array<number> | Array<RatedType>): addRateType => ({ type: ADD_RATED, rated });

/*Add favorite movies */
export const addFavoriteMoviesThunk = (favoriteMovies: Array<string>, favoriteId: Array<number>) => (dispatch: any) => {
    dispatch(addFavoriteMoviesAC(favoriteMovies));
    dispatch(addFavoriteIdAC(favoriteId));
};

type ThunkVoidType = ThunkAction<void, AppStateType, unknown, ActionType>;

/*Add viewed movies */
export const addViewedThunk = (viewed: Array<number>): ThunkVoidType => (dispatch) => {
    dispatch(addViewedAC(viewed));
};

/*Add rated movies */
export const addRatedThunk = (rated: Array<number> | Array<RatedType>): ThunkVoidType => (dispatch) => {
    dispatch(addRatedAC(rated));
};


export default profileReducer;
