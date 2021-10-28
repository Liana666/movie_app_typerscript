import React from "react";
import { connect } from "react-redux";

import Pagination from "./Pagination";
import { addMoviesAC, getNewPageAC, getTotalPagesAC, getNewMovieAC } from "../../../redux/reducers/paginationReducer";

const mapStatetoProps = (state) => {
   return {
      currentPage: state.PaginationPage.currentPage,
      movies: state.PaginationPage.movies,
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

const PaginationContainer = connect(mapStatetoProps, mapDispatchtoProps)(Pagination);


export default PaginationContainer;