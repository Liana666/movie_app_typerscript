import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { getGenres } from "../../api/api";


const MovieCardContainer = (props) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres()
            .then(response => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    return (
        <>
            <MovieCard
                title={props.title}
                overview={props.overview}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
                genre_ids={props.genre_ids}
                adult={props.adult}
                id={props.id}
                genres={genres}
                backdrop_path={props.backdrop_path}
            />
        </>
    )
}


export default MovieCardContainer;
