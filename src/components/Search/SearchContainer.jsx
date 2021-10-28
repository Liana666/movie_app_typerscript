import React from "react";

import { connect } from "react-redux";

import Search from "./Search";
import { addMoviesAC, getNewPageAC, getTotalPagesAC, getNewMovieAC } from "../../redux/reducers/searchReducer";

const mapStatetoProps = (state) => {
   return {
      currentPage: state.SearchPage.currentPage,
      movies: state.SearchPage.movies,
      moviesName: state.SearchPage.moviesName,
      totalPages: state.SearchPage.totalPages
   }

}

const mapDispatchtoProps = (dispatch) => {
   return {
      setCurrentPage: (currentPage) => {
         dispatch(getNewPageAC(currentPage));
      },

      addMovies: (movies) => {
         dispatch(addMoviesAC(movies));
      },


      searchMovie: (moviesName) => {
         dispatch(getNewMovieAC(moviesName));

      },

      setToTalPages: (totalPages) => {
         dispatch(getTotalPagesAC(totalPages));
      }

   }
}


const SearchContainer = connect(mapStatetoProps, mapDispatchtoProps)(Search);

export default SearchContainer;