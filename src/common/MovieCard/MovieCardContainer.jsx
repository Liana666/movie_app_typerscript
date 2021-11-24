import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { connect } from "react-redux";

import { getGenres } from "../../api/api";

import { addFavoriteMoviesThunk } from "../../redux/reducers/profileReducer";


const MovieCardContainer = (props) => {

    const [genres, setGenres] = useState([]);
    let mapGenres = new Map();
    let single_genres = [];

    useEffect(() => {
        getGenres()
            .then(response => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    genres.map(g => {
        mapGenres.set(g.id, g.name);
    })

    props.genre_ids.map(g => {
        if (mapGenres.has(g)) {
            single_genres.push(mapGenres.get(g));
        }
    })


    return (
        <>
            <MovieCard
                addFavorite={props.addFavorite}
                title={props.title}
                overview={props.overview}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
                genre_ids={props.genre_ids}
                adult={props.adult}
                backdrop_path={props.backdrop_path}
                titleMovies={props.titleMovies}
                single_genres={single_genres}
                id={props.id}
                favoriteId={props.favoriteId}
                rated={props.rated}
            />
        </>

    )
}

const mapStatetoProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        favoriteId: state.ProfilePage.favoriteId,
        rated: state.ProfilePage.rated
    }
}


export default connect(mapStatetoProps,
    { addFavorite: addFavoriteMoviesThunk })
    (MovieCardContainer)

