import React from "react";

import movies from "./Movies.module.css";
import FavoriteCard from "./FavoriteCard/FavoriteCard";

const Movies = (props) => {


   return (
      <div className={movies.wrapper}>
         {props.favoriteMovies.length > 0 ?
            props.favoriteMovies.map(movie =>
               <FavoriteCard movie={movie} />
            )
            : <span>Вы еще не добавили в избранное</span>
         }
      </div>
   )
}

export default Movies;