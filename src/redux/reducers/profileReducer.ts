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
    vote: Array<number>,
    favoriteMovies: Array<string>
    favoriteIdMovie: string
    favoriteId: Array<number>
    currentId: number
    viewed: Array<number>
    currentViewed: number
    rated: Array<RatedType>
    currentRated: RatedType
}


let initialState: initialStateType = {
    vote: [1, 2, 3, 4, 5],
    favoriteMovies: [],
    favoriteIdMovie: '',
    favoriteId: [],
    currentId: 0,
    viewed: [],
    currentViewed: 0,
    rated: [],
    currentRated: {
        img: '',
        vote: 0
    }
}

const profileReducer = (state = initialState, action: ActionType): initialStateType => {

    switch (action.type) {

        case ADD_FAVORITE_MOVIES: {
            return {
                ...state,
                favoriteMovies: [...state.favoriteMovies, action.favoriteIdMovie]
            }
        }

        case REMOVE_FAVORITE_MOVIES: {

            const favoriteMovies = state.favoriteMovies.filter(
                (item: any) => item !== action.movieImg
            )

            return {
                ...state,
                favoriteMovies: favoriteMovies,
            }
        }

        case ADD_FAVORITE_ID: {
            return {
                ...state,
                favoriteId: [...state.favoriteId, action.currentId]
            }
        }

        case REMOVE_FAVORITE_ID: {
            const favoriteId = state.favoriteId.filter(
                (item: any) => item !== action.movieId
            )

            return {
                ...state,
                favoriteId: favoriteId
            }
        }

        case ADD_VIEWED: {
            return {
                ...state,
                viewed: [...state.viewed, action.currentViewed]
            }
        }

        case ADD_RATED: {
            return {
                ...state,
                rated: [...state.rated, action.currentRated]
            }
        }


        default:
            return state;
    }
}

type ActionType = addFavoriteMoviesType | removeFavoriteMoviesType | addFavoriteIdType | removeFavoriteIdType |
    addViewedType | addRateType;

type addFavoriteMoviesType = { type: typeof ADD_FAVORITE_MOVIES, favoriteIdMovie: string }
export const addFavoriteMoviesAC = (favoriteIdMovie: string): addFavoriteMoviesType => ({ type: ADD_FAVORITE_MOVIES, favoriteIdMovie });

type removeFavoriteMoviesType = { type: typeof REMOVE_FAVORITE_MOVIES, movieImg: string }
export const removeFavoriteMoviesAC = (movieImg: string): removeFavoriteMoviesType => ({ type: REMOVE_FAVORITE_MOVIES, movieImg });

type addFavoriteIdType = { type: typeof ADD_FAVORITE_ID, currentId: number }
export const addFavoriteIdAC = (currentId: number): addFavoriteIdType => ({ type: ADD_FAVORITE_ID, currentId });

type removeFavoriteIdType = { type: typeof REMOVE_FAVORITE_ID, movieId: number }
export const removeFavoriteIdAC = (movieId: number): removeFavoriteIdType => ({ type: REMOVE_FAVORITE_ID, movieId });

type addViewedType = { type: typeof ADD_VIEWED, currentViewed: number }
export const addViewedAC = (currentViewed: number): addViewedType => ({ type: ADD_VIEWED, currentViewed });

type addRateType = { type: typeof ADD_RATED, currentRated: RatedType }
export const addRatedAC = (currentRated: RatedType): addRateType => ({ type: ADD_RATED, currentRated });



type ThunkVoidType = ThunkAction<void, AppStateType, unknown, ActionType>;

/*Add favorite movies */
export const addFavoriteMoviesThunk = (favoriteIdMovie: string, currentId: number): ThunkVoidType => (dispatch) => {
    dispatch(addFavoriteMoviesAC(favoriteIdMovie));
    dispatch(addFavoriteIdAC(currentId));
};

/*Add viewed movies */
export const addViewedThunk = (currentViewed: number): ThunkVoidType => (dispatch) => {
    dispatch(addViewedAC(currentViewed));
};

/*Add rated movies */
export const addRatedThunk = (currentRated: RatedType): ThunkVoidType => (dispatch) => {
    dispatch(addRatedAC(currentRated));
};


export default profileReducer;
