import React from "react";
import { useDispatch } from "react-redux";
import { getNewPageAC } from "../../../redux/reducers/mainReducer";

import loop from "../../../img/lupa2.png";

import search from "./Search.module.css";


const Search = (props) => {
   const dispatch = useDispatch();

   let searchMovie = (e) => {
      dispatch(getNewPageAC(1));
      let newMovieRequest = e.target.value;
      props.searchMovie(newMovieRequest);
   }

   let addNewMovies = () => {
      props.addMovie(props.moviesName, props.currentPage);
   }

   return (
      <>
         <input onChange={searchMovie} className={search.input} value={props.moviesName} placeholder="поиск..." type="text" />
         <img onClick={addNewMovies} className={search.loop} src={loop} alt="" />
      </>
   )
}


export default Search;
