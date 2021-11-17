import React from "react";
import { connect } from "react-redux";
import Movies from "./Movies";

let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}

let mapDispatcToProps = (dispatch) => {

}

const MoviesContainer = connect(mapStateToProps, mapDispatcToProps)(Movies);

export default MoviesContainer;