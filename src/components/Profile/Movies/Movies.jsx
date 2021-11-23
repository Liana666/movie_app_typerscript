import React, { useEffect, useState } from "react";

import movies from "./Movies.module.css";
import FavoriteCardContainer from "./FavoriteCard/FavoriteCardContainer";

const Movies = (props) => {
   const [viewedMovies, setViewedMovies] = useState([]);
   const [assessedMovies, setAssessedMovies] = useState([]);

   useEffect(() => {
      if (props.viewed.length > 0 && props.favoriteMovies.length > 0) {
         let viewedMovies = props.viewed.filter(x => props.favoriteMovies.includes(x));
         setViewedMovies(viewedMovies);
      }
   }, [props.viewed]);

   useEffect(() => {
      if (props.assessed.length > 0 && props.favoriteMovies.length > 0) {
         let assessedMovies = props.assessed.filter(x => props.favoriteMovies.includes(x));
         setAssessedMovies(assessedMovies);
      }
   }, [props.assessed]);



   return (
      <div className={movies.wrapper}>
         {props.favoriteMovies.length > 0 ?
            props.favoriteMovies.map(movie =>
               < FavoriteCardContainer key={movie.id} movie={movie} />
            )
            : <span>Вы еще не добавили в избранное</span>
         }
      </div>
   )
}

export default Movies;