import React from "react";
import { connect } from "react-redux";
import { getNewMovieAC } from "../../redux/reducers/headerReducer";

import Header from "./Header";

const mapStatetoProps = (state) => {
    return {
        moviesName: state.HeaderPage.moviesName
    }
    debugger;
}


const mapDispatchtoProps = (dispatch) => {
    return {
        searchMovie: (newMovieRequest) => {
            dispatch(getNewMovieAC(newMovieRequest));
        }

    }
}


const HeaderContainer = connect(mapStatetoProps, mapDispatchtoProps)(Header);




export default HeaderContainer;