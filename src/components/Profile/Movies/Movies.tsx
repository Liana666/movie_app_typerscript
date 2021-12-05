
import React, { useEffect, useState, FC } from "react";
import { Route, Switch } from "react-router";

import movies from "./Movies.module.css";

import FavoriteCardContainer from "./FavoriteCard/FavoriteCardContainer";
import { MoviesType } from "../../../types/type";

const Movies: FC<MoviesType> = ({ favoriteMovies, viewedMovies, assessedMovies }) => {


   return (
      <div className={movies.wrapper}>
         <Switch>
            <Route path="/profile/all-movies">
               {favoriteMovies.length > 0 ?
                  favoriteMovies.map(movie =>
                     < FavoriteCardContainer key={movie} movie={movie} />
                  )
                  : <span>Вы еще не добавили в избранное</span>
               }
            </Route>
            <Route path="/profile/viewed-movies">
               {viewedMovies.length > 0 ?
                  viewedMovies.map(movie =>
                     < FavoriteCardContainer key={movie} movie={movie} />
                  )
                  : <span>Вы еще не добавили в просмотренное</span>
               }
            </Route>
            <Route path="/profile/assessed-movies">
               {assessedMovies.length > 0 ?
                  assessedMovies.map(movie =>
                     < FavoriteCardContainer key={movie} movie={movie} />
                  )
                  : <span>Вы еще ничего не оценили</span>
               }
            </Route>
         </Switch>

      </div>
   )
}

export default Movies;