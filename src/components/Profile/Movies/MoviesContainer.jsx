import React from "react";
import { connect } from "react-redux";
import Movies from "./Movies";

let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}

const MoviesContainer = connect(mapStateToProps)(Movies);

export default MoviesContainer;