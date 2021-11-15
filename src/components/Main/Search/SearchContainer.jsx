import React from "react";

import { connect } from "react-redux";

import Search from "./Search";
import { getNewMovieAC, searchMoviesThunk } from "../../../redux/reducers/mainReducer";


const SearchContainer = (props) => {


   return (
      <>
         <Search
            searchMovie={props.searchMovie}
            addMovie={props.addMovie}
            movies={props.movies}
            moviesName={props.moviesName}
            currentPage={props.currentPage}
         />
      </>
   )

}


const mapStatetoProps = (state) => {
   return {
      currentPage: state.MainPage.currentPage,
      movies: state.MainPage.movies,
      moviesName: state.MainPage.moviesName
   }

}


export default connect(mapStatetoProps,
   { searchMovie: getNewMovieAC, addMovie: searchMoviesThunk })
   (SearchContainer);