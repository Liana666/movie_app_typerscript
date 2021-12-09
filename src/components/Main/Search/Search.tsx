import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { getNewPageAC } from "../../../redux/reducers/mainReducer";

import loop from "../../../img/lupa2.png";

import search from "./Search.module.css";
import { SearchType } from "../../../types/type";


const Search: FC<SearchType> = ({
   searchMovie,
   addMovie,
   moviesName,
   currentPage
}) => {

   const dispatch = useDispatch();

   let searchNewMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(getNewPageAC(1));
      let newMovieRequest = e.target.value;
      searchMovie(newMovieRequest);
   }

   let addNewMovies = () => {
      addMovie(moviesName, currentPage);
   }

   return (
      <>
         <input onChange={searchNewMovie} className={search.input} value={moviesName} placeholder="поиск..." type="text" />
         <img onClick={addNewMovies} className={search.loop} src={loop} alt="" />
      </>
   )
}


export default Search;
