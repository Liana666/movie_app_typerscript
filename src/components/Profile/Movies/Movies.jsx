import React, { useEffect, useState } from "react";

import movies from "./Movies.module.css";
import FavoriteCardContainer from "./FavoriteCard/FavoriteCardContainer";
import { Route, Switch } from "react-router";

const Movies = (props) => {
   const [viewedMovies, setViewedMovies] = useState([]);
   const [assessedMovies, setAssessedMovies] = useState([]);

   useEffect(() => {
      if (props.viewed.length > 0 && props.favoriteMovies.length > 0) {
         let viewedMovies = props.viewed.filter(v => props.favoriteMovies.includes(v));
         setViewedMovies(viewedMovies);
      }
   }, [props.viewed]);

   useEffect(() => {
      if (props.assessed.length > 0 && props.favoriteMovies.length > 0) {
         let assessedMovies = props.assessed.filter(a => props.favoriteMovies.includes(a));
         setAssessedMovies(assessedMovies);
      }
   }, [props.assessed]);



   return (
      <div className={movies.wrapper}>
         <Switch>
            <Route path="/profile/all-movies">
               {props.favoriteMovies.length > 0 ?
                  props.favoriteMovies.map(movie =>
                     < FavoriteCardContainer key={movie.id} movie={movie} />
                  )
                  : <span>Вы еще не добавили в избранное</span>
               }
            </Route>
            <Route path="/profile/viewed-movies">
               {viewedMovies.length > 0 ?
                  viewedMovies.map(movie =>
                     < FavoriteCardContainer key={movie.id} movie={movie} />
                  )
                  : <span>Вы еще не добавили в просмотренное</span>
               }
            </Route>
            <Route path="/profile/assessed-movies">
               {assessedMovies.length > 0 ?
                  assessedMovies.map(movie =>
                     < FavoriteCardContainer key={movie.id} movie={movie} />
                  )
                  : <span>Вы еще ничего не оценили</span>
               }
            </Route>
         </Switch>

      </div>
   )
}

export default Movies;