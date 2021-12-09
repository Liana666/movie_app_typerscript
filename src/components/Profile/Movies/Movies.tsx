
import { FC } from "react";
import { Route, Switch } from "react-router";

import movies from "./Movies.module.css";

import FavoriteCardContainer from "./FavoriteCard/FavoriteCardContainer";
import { MoviePropNumber, MoviesType } from "../../../types/type";

const Movies: FC<MoviesType> = ({
   favoriteMovies,
   viewedMovies,
   assessedMovies
}) => {

   console.log(assessedMovies)

   return (
      <div className={movies.wrapper}>
         <Switch>
            <Route path="/profile/all-movies">
               {favoriteMovies.length > 0 ?
                  favoriteMovies.map((m: MoviePropNumber) => {
                     return (< FavoriteCardContainer>{m}</FavoriteCardContainer>)
                  })
                  : <span>Вы еще не добавили в избранное</span>
               }
            </Route>
            <Route path="/profile/viewed-movies">
               {viewedMovies.length > 0 ?
                  viewedMovies.map((m: MoviePropNumber) => {
                     return (< FavoriteCardContainer>{m}</FavoriteCardContainer>)
                  })
                  : <span>Вы еще не добавили в просмотренное</span>
               }
            </Route>
            <Route path="/profile/assessed-movies">
               {assessedMovies.length > 0 ?
                  assessedMovies.map((m: MoviePropNumber) => {
                     return (< FavoriteCardContainer>{m}</FavoriteCardContainer>)
                  })
                  : <span>Вы еще ничего не оценили</span>
               }
            </Route>
         </Switch>

      </div>
   )
}

export default Movies;