import React from "react";
import { connect } from "react-redux";
import { changePageThunk, searchMoviesThunk } from "../../redux/reducers/mainReducer";

import Pagination from "./Pagination";

const PaginationContainer = (props) => {


    return (
        <>
            <Pagination
                getNeewMoviesPage={props.getNeewMoviesPage}
                currentPage={props.currentPage}
                genre={props.genre}
                year={props.year}
                moviesName={props.moviesName}
                getNewSearchMovies={props.getNewSearchMovies}
            />

        </>
    )
}


const mapStatetoProps = (state) => {
    return {
        moviesName: state.MainPage.moviesName,
        genre: state.MainPage.genre,
        currentPage: state.MainPage.currentPage,
        year: state.MainPage.year
    }
}

export default connect(mapStatetoProps,
    { getNeewMoviesPage: changePageThunk })
    (PaginationContainer);
