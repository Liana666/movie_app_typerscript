import React from "react";

import { connect } from "react-redux";

import { getNewMovieAC, getTotalPagesAC } from "../../redux/reducers/searchReducer";
import Search from "./Search";


const mapStatetoProps = (state) => {
   return {
      moviesName: state.SearchPage.moviesName,
      totalPages: state.SearchPage.totalPages
   }
   debugger;
}


const mapDispatchtoProps = (dispatch) => {
   return {
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