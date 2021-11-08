import React from "react";
import * as axios from "axios";

import { createRef, useState } from "react";

import loop from "../../../img/lupa.png";
// import popcorn from "../../../img/popcorn.png";
import firesingle from "../../../img/fire-search.png";

import styled from "styled-components";
import search from "./Search.module.css";

import MovieCardContainer from "../MovieCard/MovieCardContainer";

const Search = (props) => {
   let newsPostElement = React.createRef();
   let [isLoaded, setisLoaded] = useState(false);
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
      setisLoaded(true);
   }

   // const onChangePage = (currentPage) => {
   //    props.getNeewMoviesPage(props.moviesName, currentPage);
   //    window.scrollTo(0, 0);
   // }

   return (
      <>

         <input onChange={searchMovie} className={search.input} ref={newsPostElement} value={props.moviesName} placeholder="поиск..." type="text" />
         <img onClick={addNewMovies} className={search.loop} src={loop} alt="" />

         {/* 
         <MovieWrapper>
            {
               isLoaded ?
                  props.movies.map(m => <MovieCardContainer
                     key={m.id}
                     title={m.title}
                     overview={m.overview}
                     poster_path={m.poster_path}
                     release_date={m.release_date}
                     vote_average={m.vote_average}
                     genre_ids={m.genre_ids}
                     adult={m.adult}
                  />)
                  : null
            }
         </MovieWrapper>

         {
            isLoaded ?
               <Pagination>
                  {pages.map(p => <div className={search.page} onClick={() => onChangePage(p)}><span className={p === props.currentPage ? search.currentpage : null}>{p}</span></div>)}
               </Pagination>
               : null
         } */}

      </>
   )
}


const MovieWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`
const SearchWrapper = styled.div`
   position: relative;
   padding: 40px 60px;
   margin: 20px 0;
   display: flex;
   allign-items: center;
   justify-content: space-between;

   background: #1E273A;
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
   border-radius: 63px;

   overflow: hidden;
`

const Pagination = styled.div`
   display: flex;
   justify-content: flex-end;
`

export default Search;
