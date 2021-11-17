import React from "react";

import movies from "./Movies.module.css";

const Movies = (props) => {


   return (
      <div>
         {props.favoriteMovies.length > 0 ?
            props.favoriteMovies.map(movie => <img className={movies.img} src={movie} />)
            : <span>Вы еще не добавили в избранное</span>
         }
      </div>
   )
}

export default Movies;