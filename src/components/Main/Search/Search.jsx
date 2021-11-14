import React from "react";

import loop from "../../../img/lupa2.png";
import search from "./Search.module.css";


const Search = (props) => {
   let newsPostElement = React.createRef();
   let pageNumber = props.totalPages;
   let pages = [];

   for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
   }

   let searchMovie = (e) => {
      let newMovieRequest = e.target.value;
      props.searchMovie(newMovieRequest);

   }

   let addNewMovies = () => {
      props.addMovie(props.moviesName, props.currentPage);
   }

   return (
      <>
         <input onChange={searchMovie} className={search.input} ref={newsPostElement} value={props.moviesName} placeholder="поиск..." type="text" />
         <img onClick={addNewMovies} className={search.loop} src={loop} alt="" />
      </>
   )
}


export default Search;
