import React from "react";

import { connect } from "react-redux";

import { getNewMovieAC } from "../../redux/reducers/searchReducer";
import Search from "./Search";


const mapStatetoProps = (state) => {
   return {
      moviesName: state.SearchPage.moviesName,
      newMovies: state.SearchPage.newMovies
   }

}


const mapDispatchtoProps = (dispatch) => {
   return {
      searchMovie: (newMovieRequest) => {
         dispatch(getNewMovieAC(newMovieRequest));
      }

      // addMovies: (newMovies) => {
      //     dispatch(addNewMovieAC(newMovies));
      // }

   }
}


const SearchContainer = connect(mapStatetoProps, mapDispatchtoProps)(Search);

export default SearchContainer;