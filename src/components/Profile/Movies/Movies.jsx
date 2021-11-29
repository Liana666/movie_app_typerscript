import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";

import movies from "./Movies.module.css";

import FavoriteCardContainer from "./FavoriteCard/FavoriteCardContainer";

const Movies = ({ viewed, favoriteMovies, assessed }) => {
   const [viewedMovies, setViewedMovies] = useState([]);
   const [assessedMovies, setAssessedMovies] = useState([]);

   useEffect(() => {
      if (viewed.length > 0 && favoriteMovies.length > 0) {
         let viewedMovies = viewed.filter(v => favoriteMovies.includes(v));
         setViewedMovies(viewedMovies);
      }
   }, [viewed]);

   useEffect(() => {
      if (assessed.length > 0 && favoriteMovies.length > 0) {
         let assessedMovies = assessed.filter(a => favoriteMovies.includes(a));
         setAssessedMovies(assessedMovies);
      }
   }, [assessed]);


   return (
      <div className={movies.wrapper}>
         <Switch>
            <Route path="/profile/all-movies">
               {favoriteMovies.length > 0 ?
                  favoriteMovies.map(movie =>
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