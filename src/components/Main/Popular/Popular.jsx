import React from "react";

import styled from "styled-components";
import MovieCardContainer from "../MovieCard/MovieCardContainer";

const Popular = (props) => {

    return (
        <>
            {
                props.popular !== undefined && props.genre === 0 && props.year === 0 && props.moviesName === '' ?
                    <MoviesCard>
                        {props.popular.map(m => <MovieCardContainer
                            key={m.id}
                            title={m.title}
                            overview={m.overview}
                            poster_path={m.poster_path}
                            release_date={m.release_date}
                            vote_average={m.vote_average}
                            genre_ids={m.genre_ids}
                            adult={m.adult}
                            backdrop_path={m.backdrop_path}
                            id={m.id}
                        />)}
                    </MoviesCard>
                    : null
            }
        </>
    )
}

const MoviesCard = styled.div`
    width: 100%;
    display: flex;
    justify-content:spaxce-between;
    flex-wrap: wrap;
`

export default Popular;