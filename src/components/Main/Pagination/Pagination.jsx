import React from "react";

import { searchMovies } from "../../../api/api";
import { useState } from "react";

import styled from "styled-components";

import MovieCard from "../MovieCard/MovieCard";

const Pagination = (props) => {
   let pages = [];
   let pageNumber = props.totalPages;
   let name = props.name;

   let [isLoaded, setisLoaded] = useState(false);

   for (let i = 1; i <= pageNumber; i++) {
      pages.push(i);
   }

   const onChangePage = (currentPage) => {
      props.setCurrentPage(currentPage);
      searchMovies(name, currentPage)
         .then(response => {
            let data = response.data.results;
            props.addMovies(data);
            setisLoaded(true);
         });
   }

   return (
      <>
         <MovieWrapper>
            {isLoaded ?
               props.movies.map(m => <MovieCard
                  key={m.id}
                  title={m.title}
                  overview={m.overview}
                  poster_path={m.poster_path}
                  release_date={m.release_date}
                  vote_average={m.vote_average}
                  genre_ids={m.genre_ids}
                  adult={m.adult}
               />)
               : null}
         </MovieWrapper>

         {pages.map(p => <span style={{ padding: 20 }} onClick={() => onChangePage(p)}>{p}</span>)}
      </>
   )
}

const MovieWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export default Pagination;