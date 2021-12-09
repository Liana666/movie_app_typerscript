import { ThunkAction } from "redux-thunk";
import { getMovies } from "../../api/api";
import { filterGenresMovies } from "../../api/api";
import { filterYearsMovies } from "../../api/api";
import { searchMovies } from "../../api/api";
import { MovieType } from "../../types/type";
import { AppStateType } from "../store";

const ADD_GENRE = "ADD_GENRE";
const ADD_YEAR = "ADD_YEAR";
const ADD_POPULAR = "ADD_POPULAR";
const ADD_MOVIES = "ADD_MOVIES";
const ADD_NEW_MOVIES = "ADD_NEW_MOVIES";
const ADD_NEW_POPULAR = "ADD_NEW_POPULAR";
const GET_CURRENT_PAGE = "GET_CURRENT_PAGE";
const GET_CURRENT_POPULAR_PAGE = "GET_CURRENT_POPULAR_PAGE";
const GET_TOTAL_PAGES = "GET_TOTAL_PAGES";
const GET_NEW_MOVIETITLE = "GET_NEW_MOVIETITLE";

type initialStateType = {
   moviesName: string
   genre: number
   popular: Array<MovieType>
   movies: Array<MovieType>
   totalPages: number
   currentPage: number
   currentPagePopular: number
   years: Array<number>
   year: number
}

let initialState: initialStateType = {
   moviesName: '',
   genre: 0,
   popular: [],
   movies: [],
   totalPages: 1,
   currentPage: 1,
   currentPagePopular: 1,
   years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2002, 2001, 2000],
   year: 0
}

const mainReducer = (state = initialState, action: ActionType) => {

   switch (action.type) {

      case ADD_GENRE:
         return { ...state, genre: action.genre }

      case ADD_YEAR:
         return { ...state, year: action.year }


      case ADD_POPULAR:
         return { ...state, popular: action.popular }

      case ADD_MOVIES:
         return {
            ...state, movies: action.movies
         }

      case ADD_NEW_MOVIES:
         return {
            ...state, movies: [...state.movies, ...action.movies]
         }

      case ADD_NEW_POPULAR:
         return {
            ...state, popular: [...state.popular, ...action.popular]
         }

      case GET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }

      case GET_CURRENT_POPULAR_PAGE:
         return { ...state, currentPagePopular: action.currentPagePopular }

      case GET_TOTAL_PAGES:
         return { ...state, totalPages: action.totalPages }

      case GET_NEW_MOVIETITLE:
         return { ...state, moviesName: action.moviesName }

      default:
         return state;
   }
}

type ActionType = addGenreType | addYearType | AddMoviesType | AddNewMoviesType | AddPopularType | AddNewPopularType | getNewPageType
   | getNewPopularPageType | getTotalPageType | getNewMovieType;

type addGenreType = { type: typeof ADD_GENRE, genre: number }
export const addGenreAC = (genre: number): addGenreType => ({ type: ADD_GENRE, genre });

type addYearType = { type: typeof ADD_YEAR, year: number }
export const addYearAC = (year: number): addYearType => ({ type: ADD_YEAR, year });

type AddMoviesType = { type: typeof ADD_MOVIES, movies: Array<MovieType> }
export const addMoviesAC = (movies: Array<MovieType>): AddMoviesType => ({ type: ADD_MOVIES, movies });

type AddNewMoviesType = { type: typeof ADD_NEW_MOVIES, movies: Array<MovieType> }
export const addNewMoviesAC = (movies: Array<MovieType>): AddNewMoviesType => ({ type: ADD_NEW_MOVIES, movies });

type AddPopularType = { type: typeof ADD_POPULAR, popular: Array<MovieType> }
export const addPopularAC = (popular: Array<MovieType>): AddPopularType => ({ type: ADD_POPULAR, popular });

type AddNewPopularType = { type: typeof ADD_NEW_POPULAR, popular: Array<MovieType> }
export const addNewPopularAC = (popular: Array<MovieType>): AddNewPopularType => ({ type: ADD_NEW_POPULAR, popular });

type getNewPageType = { type: typeof GET_CURRENT_PAGE, currentPage: number }
export const getNewPageAC = (currentPage: number): getNewPageType => ({ type: GET_CURRENT_PAGE, currentPage });

type getNewPopularPageType = { type: typeof GET_CURRENT_POPULAR_PAGE, currentPagePopular: number }
export const getNewPopularPageAC = (currentPagePopular: number): getNewPopularPageType => ({ type: GET_CURRENT_POPULAR_PAGE, currentPagePopular });

type getTotalPageType = { type: typeof GET_TOTAL_PAGES, totalPages: number }
export const getTotalPagesAC = (totalPages: number): getTotalPageType => ({ type: GET_TOTAL_PAGES, totalPages });

type getNewMovieType = { type: typeof GET_NEW_MOVIETITLE, moviesName: string }
export const getNewMovieAC = (moviesName: string): getNewMovieType => ({ type: GET_NEW_MOVIETITLE, moviesName });

type ThunkVoidType = ThunkAction<void, AppStateType, unknown, ActionType>;
type ThunkPromiseType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

/*get state element*/

export const changeGenreThunk = (page: number, genre: number,
   year?: number): ThunkVoidType => (dispatch) => {
      dispatch(addGenreAC(genre));
      dispatch(getMoviesThunk(page, genre, year));
      dispatch(getNewMovieAC(''));
   }

export const changeYearThunk = (page: number, genre: number, year: number): ThunkVoidType => (dispatch) => {
   dispatch(addYearAC(year));
   dispatch(getMoviesThunk(page, genre, year));
   dispatch(getNewMovieAC(''));
}


/* get Movies*/

export const getMoviesThunk = (currentPage: number, genre: number, year?: number): ThunkPromiseType => async (dispatch) => {
   dispatch(addPopularAC([]))

   if (genre !== 0) {
      filterGenresMovies(currentPage, genre, year)
         .then((response) => {
            let totalPages = response.data.total_pages;
            dispatch(getTotalPagesAC(totalPages));
            let data = response.data.results;
            dispatch(addMoviesAC(data));
         });
   }

   else {
      filterYearsMovies(currentPage, year)
         .then((response) => {
            let totalPages = response.data.total_pages;
            dispatch(getTotalPagesAC(totalPages));
            let data = response.data.results;
            dispatch(addMoviesAC(data));
         });
   }

};

export const getPopularThunk = (): ThunkPromiseType => async (dispatch) => {
   getMovies()
      .then((response) => {
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addPopularAC(response.data.results));
      });

};

/* Pagination*/

export const changePageThunk = (moviesName: string, currentPage: number, genre: number, year: number): ThunkPromiseType => async (dispatch) => {
   dispatch(getNewPageAC(currentPage));

   if (moviesName !== '') {
      searchMovies(moviesName, currentPage)
         .then((response) => {
            let data = response.data.results;
            dispatch(addNewMoviesAC(data));
         });
   }

   else {
      if (genre !== 0) {
         filterGenresMovies(currentPage, genre, year)
            .then((response) => {
               let data = response.data.results;
               dispatch(addNewMoviesAC(data));
            });
      }
      else {
         filterYearsMovies(currentPage, year)
            .then((response) => {
               let data = response.data.results;
               dispatch(addNewMoviesAC(data));
            });
      }
   }
};

export const changePagePopularThunk = (page: number): ThunkPromiseType => async (dispatch) => {
   dispatch(getNewPopularPageAC(page));

   getMovies(page)
      .then((response) => {
         dispatch(addNewPopularAC(response.data.results));
      });
}

/*Search*/

export const searchMoviesThunk = (moviesName: string, currentPage: number): ThunkPromiseType => async (dispatch) => {
   dispatch(getNewPageAC(currentPage));
   searchMovies(moviesName, currentPage)
      .then((response) => {
         let data = response.data.results;
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(data));
      });
};




export default mainReducer;