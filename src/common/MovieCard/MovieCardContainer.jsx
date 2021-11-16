import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { connect } from "react-redux";

import { getGenres } from "../../api/api";

import { addFavoriteMoviesThunk } from "../../redux/reducers/profileReducer";

const mapStatetoProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}

let mapDispatcToProps = (dispatch) => {
    return {
        addFavorite: (favorite) => {
            dispatch(addFavoriteMoviesThunk(favorite))
        }
    }
}


const MovieCardContainer = connect(mapStatetoProps, mapDispatcToProps)(MovieCard)

export default MovieCardContainer;
