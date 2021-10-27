import React from "react";

import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";

const Movies = (props) => {
   return (
      <MoviesCard>
         {props.movies.map(m => < MovieCard
            key={m.id}
            title={m.title}
            overview={m.overview}
            poster_path={m.poster_path}
            release_date={m.release_date}
            vote_average={m.vote_average}
            genre_ids={m.genre_ids}
            adult={m.adult}

         />)}
      </MoviesCard>
   )
}

const MoviesCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export default Movies;