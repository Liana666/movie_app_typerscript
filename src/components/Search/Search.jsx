import React from "react";
import * as axios from "axios";

import { createRef, useState } from "react";

import loop from "../../img/lupa.png";
import popcorn from "../../img/popcorn.png";
import firesingle from "../../img/fire-search.png";

import styled from "styled-components";
import search from "./Search.module.css";

import MovieCard from "../Main/MovieCard/MovieCard";

const Search = (props) => {
   let newsPostElement = React.createRef();
   let [isLoaded, setisLoaded] = useState(false);
   let [newMovies, setNewMovies] = useState(false);

   let searchMovie = (e) => {
      let newMovieRequest = e.target.value;
      console.log(newMovieRequest)
      props.searchMovie(newMovieRequest);

   }

   let addNewMovies = () => {
      let name = props.moviesName;
      axios.get(`https://api.themoviedb.org/3/search/movie?page=1&query=${name}&api_key=d495d35d47c329b48d81d83ed0f10265&language=ru-RU&region=RU`)
         .then(response => {
            let data = response.data.results;
            setNewMovies(data);
            setisLoaded(true);
         });

   }

   return (
      <>
         <SearchWrapper>
            <img className={search.background} src={firesingle} alt="" />
            <div className={search.info}>
               <div className={search.title}>Добро пожаловать</div>
               <p className={search.text}>Миллионы фильмов на разный вкус. Здесь вы точно найдете отличный фильмец скоротать вечерок. Исследуйте сейчас.</p>
               <input onChange={searchMovie} className={search.input} ref={newsPostElement} value={props.moviesName} placeholder="поиск..." type="text" />
               <img onClick={addNewMovies} className={search.loop} src={loop} alt="" />
            </div>
            <div className={search.img}>
               <img src={popcorn} alt="" />
            </div>

         </SearchWrapper>




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

export default Search;
