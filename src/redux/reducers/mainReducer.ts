
import { getMovies } from "../../api/api";
import { filterGenresMovies } from "../../api/api";
import { filterYearsMovies } from "../../api/api";
import { searchMovies } from "../../api/api";

export type GenreType = {
   id: number
   name: string
}

export type MovieType = {
   title: string
   overview: string
   poster_path: string
   release_date: number
   vote_average: number
   genres: Array<GenreType>
   adult: boolean
   backdrop_path: string
   id: number
   video?: string
   genre_ids?: Array<number>
}

type initialStateType = {
   moviesName: string
   genre: number | null
   popular: Array<MovieType>
   movies: Array<MovieType>
   totalPages: number
   currentPage: number
   currentPagePopular: number
   years: Array<number>
   year?: number
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

const mainReducer = (state = initialState, action: any) => {

   switch (action.type) {

      case "ADD_GENRE":
         return { ...state, genre: action.genre }

      case "ADD_YEAR":
         return { ...state, year: action.year }

      case "ADD_GENRES":
         return { ...state, genres: action.genres }

      case "ADD_POPULAR":
         return { ...state, popular: action.popular }

      case "ADD_MOVIES":
         return {
            ...state, popular: action.popular, movies: action.movies
         }

      case "ADD_NEW_MOVIES":
         return {
            ...state, movies: [...state.movies, ...action.movies]
         }

      case "ADD_NEW_POPULAR":
         return {
            ...state, popular: [...state.popular, ...action.popular]
         }

      case 'GET_CURRENT_PAGE':
         return { ...state, currentPage: action.currentPage }

      case 'GET_CURRENT_POPULAR_PAGE':
         return { ...state, currentPagePopular: action.currentPagePopular }

      case 'GET_TOTAL_PAGES':
         return { ...state, totalPages: action.totalPages }

      case 'GET_NEW_MOVIETITLE':
         return { ...state, moviesName: action.moviesName }

      default:
         return state;
   }
}


export const addGenreAC = (genre: number | null) => ({ type: 'ADD_GENRE', genre });
export const addYearAC = (year: number) => ({ type: 'ADD_YEAR', year });
export const addMoviesAC = (movies: Array<MovieType>) => ({ type: 'ADD_MOVIES', movies });
export const addNewMoviesAC = (movies: Array<MovieType>) => ({ type: 'ADD_NEW_MOVIES', movies });
export const addPopularAC = (popular: Array<MovieType>) => ({ type: 'ADD_POPULAR', popular });
export const addNewPopularAC = (popular: Array<MovieType>) => ({ type: 'ADD_NEW_POPULAR', popular });
export const getNewPageAC = (currentPage: number) => ({ type: 'GET_CURRENT_PAGE', currentPage });
export const getNewPopularPageAC = (currentPagePopular: number) => ({ type: 'GET_CURRENT_POPULAR_PAGE', currentPagePopular });
export const getTotalPagesAC = (totalPages: number) => ({ type: 'GET_TOTAL_PAGES', totalPages });
export const getNewMovieAC = (moviesName: string) => ({ type: 'GET_NEW_MOVIETITLE', moviesName });
export const getVideoAC = (key: string) => ({ type: 'GET_VIDEO', key });

/*get state element*/

export const changeGenreThunk = (page: any, genre: number, year?: number) => (dispatch: any) => {
   dispatch(addGenreAC(genre));
   dispatch(getMoviesThunk(page, genre, year));
   dispatch(getNewMovieAC(''));
}

export const changeYearThunk = (page: number, genre: number, year: number) => (dispatch: any) => {
   dispatch(addYearAC(year));
   dispatch(getMoviesThunk(page, genre, year));
   dispatch(getNewMovieAC(''));
}


/* get Movies*/

export const getMoviesThunk = (currentPage: number, genre: number, year?: number) => async (dispatch: any) => {
   dispatch(addPopularAC([]))

   if (genre !== 0) {
      filterGenresMovies(currentPage, genre, year)
         .then((response: any) => {
            let totalPages = response.data.total_pages;
            dispatch(getTotalPagesAC(totalPages));
            let data = response.data.results;
            dispatch(addMoviesAC(data));
         });
   }


   else {
      filterYearsMovies(currentPage, year)
         .then((response: any) => {
            let totalPages = response.data.total_pages;
            dispatch(getTotalPagesAC(totalPages));
            let data = response.data.results;
            dispatch(addMoviesAC(data));
         });
   }

};

export const getPopularThunk = () => async (dispatch: any) => {
   getMovies()
      .then((response: any) => {
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addPopularAC(response.data.results));
      });

};

/* Pagination*/

export const changePageThunk = (moviesName: string, currentPage: number, genre: number, year: number) => async (dispatch: any) => {
   dispatch(getNewPageAC(currentPage));

   if (moviesName !== '') {
      searchMovies(moviesName, currentPage)
         .then((response: any) => {
            let data = response.data.results;
            dispatch(addNewMoviesAC(data));
         });
   }

   else {
      if (genre !== 0) {
         filterGenresMovies(currentPage, genre, year)
            .then((response: any) => {
               let data = response.data.results;
               dispatch(addNewMoviesAC(data));
            });
      }
      else {
         filterYearsMovies(currentPage, year)
            .then((response: any) => {
               let data = response.data.results;
               dispatch(addNewMoviesAC(data));
            });
      }
   }
};

export const changePagePopularThunk = (page: number) => async (dispatch: any) => {
   dispatch(getNewPopularPageAC(page));

   getMovies(page)
      .then((response: any) => {
         dispatch(addNewPopularAC(response.data.results));
      });
}

/*Search*/

export const searchMoviesThunk = (moviesName: string, currentPage: number) => async (dispatch: any) => {
   dispatch(getNewPageAC(currentPage));
   searchMovies(moviesName, currentPage)
      .then((response: any) => {
         let data = response.data.results;
         let totalPages = response.data.total_pages;
         dispatch(getTotalPagesAC(totalPages));
         dispatch(addMoviesAC(data));
      });
};




export default mainReducer;