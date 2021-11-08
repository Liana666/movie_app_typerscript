import React from "react";

import { connect } from "react-redux";

import Search from "./Search";
import { getNewPageAC, getNewMovieAC, searchMoviesThunk, changePageThunk } from "../../../redux/reducers/mainReducer";


const SearchContainer = (props) => {


   return (
      <>
         <Search
            getNeewMoviesPage={props.getNeewMoviesPage}
            searchMovie={props.searchMovie}
            addMovie={props.addMovie}
            movies={props.movies}
            moviesName={props.moviesName}
            currentPage={props.currentPage}
            totalPages={props.totalPages}
         />
      </>
   )

}


const mapStatetoProps = (state) => {
   return {
      currentPage: state.MainPage.currentPage,
      movies: state.MainPage.movies,
      moviesName: state.MainPage.moviesName,
      totalPages: state.MainPage.totalPages
   }

}

// const mapDispatchtoProps = (dispatch) => {
//    return {
//       setCurrentPage: (currentPage) => {
//          dispatch(getNewPageAC(currentPage));
//       },

//       addMovies: (movies) => {
//          dispatch(addMoviesAC(movies));
//       },


//       searchMovie: (moviesName) => {
//          dispatch(getNewMovieAC(moviesName));

//       },

//    }
// }


export default connect(mapStatetoProps,
   { setCurrentPage: getNewPageAC, searchMovie: getNewMovieAC, addMovie: searchMoviesThunk, getNeewMoviesPage: changePageThunk })
   (SearchContainer);