import React from "react";
import * as axios from "axios";

import { createRef, useState } from "react";

import loop from "../../img/lupa.png";

import styled from "styled-components";
import header from "../Header/Header.module.css";

import MovieCard from "../Main/MovieCard/MovieCard";

const Search = (props) => {
   let newsPostElement = React.createRef();
   let [isLoaded, setisLoaded] = useState(false);
   let [newMovies, setNewMovies] = useState(false);

   let searchMovie = () => {
      let nameMovies = newsPostElement.current.value;
      props.searchMovie(nameMovies);

   }

   let addNewMovies = () => {
      let name = props.moviesName;
      axios.get(`https://api.themoviedb.org/3/search/movie?page=1&query=naruto&api_key=d495d35d47c329b48d81d83ed0f10265&language=ru-RU&region=RU`)
         .then(response => {
            let data = response.data.results;
            setNewMovies(data);
            setisLoaded(true);
         });

   }

   return (
      <>
         <input onChange={searchMovie} className={header.input} ref={newsPostElement} value={props.moviesName} placeholder="поиск..." type="text" />
         <img onClick={addNewMovies} className={header.loop} src={loop} alt="" />
         {/* <input onClick={addNewMovies} type="button" /> */}



         <MovieWrapper>
            {isLoaded ?
               newMovies.map(m => <MovieCard
                  key={m.id}
                  title={m.title}
                  overview={m.overview}
                  poster_path={m.poster_path}
                  release_date={m.release_date}
                  vote_average={m.vote_average}
                  genre_ids={m.genre_ids}
                  adult={m.adult}

               />) : null}
         </MovieWrapper>



      </>
   )

}


const MovieWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`


export default Search;
