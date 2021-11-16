import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { connect } from "react-redux";

import { getGenres } from "../../api/api";

import { addFavoriteMoviesThunk } from "../../redux/reducers/profileReducer";

const MovieCardContainer = (props) => {

    return (
        <>
            <MovieCard
                addFavorite={props.addFavorite}
                favoriteMovies={props.favoriteMovies}
                isClickFavoriteIcon={props.isClickFavoriteIcon}
                title={props.title}
                overview={props.overview}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
                genre_ids={props.genre_ids}
                adult={props.adult}
                backdrop_path={props.backdrop_path}
                titleMovies={props.titleMovies}
            />
        </>

    )
}

const mapStatetoProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        isClickFavoriteIcon: state.ProfilePage.isClickFavoriteIcon,
        titleMovies: state.ProfilePage.titleMovies
    }
}

// let mapDispatcToProps = (dispatch) => {
//     return {
//         addFavorite: (favorite) => {
//             dispatch(addFavoriteMoviesAC(favorite))
//         }
//     }
// }


export default connect(mapStatetoProps, { addFavorite: addFavoriteMoviesThunk })(MovieCardContainer)

