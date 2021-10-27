import React from "react";

import { connect } from "react-redux";

import { getNewMovieAC } from "../../redux/reducers/searchReducer";
import Search from "./Search";


const mapStatetoProps = (newState) => {
   return {
      moviesName: newState.SearchPage.moviesName,
   }
   debugger;
}


const mapDispatchtoProps = (dispatch) => {
   return {
      searchMovie: (moviesName) => {
         dispatch(getNewMovieAC(moviesName));

      }

      // addMovies: (newMovies) => {
      //     dispatch(addNewMovieAC(newMovies));
      // }

   }
}


const SearchContainer = connect(mapStatetoProps, mapDispatchtoProps)(Search);

export default SearchContainer;