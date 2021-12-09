import React from "react";
import { connect } from "react-redux";
import { changePageThunk } from "../../redux/reducers/mainReducer";
import { AppStateType } from "../../redux/store";

import Pagination from "./Pagination";

type PropsType = MapStatePropsType & MapDispatchPropsType;

const PaginationContainer = (props: PropsType) => {

    const {
        getNeewMoviesPage,
        currentPage,
        genre,
        year,
        moviesName
    } = props


    return (
        <>
            <Pagination
                getNeewMoviesPage={getNeewMoviesPage}
                currentPage={currentPage}
                genre={genre}
                year={year}
                moviesName={moviesName}
            />

        </>
    )
}

type MapStatePropsType = {
    moviesName: string
    genre: number
    currentPage: number
    year: number
}

type MapDispatchPropsType = {
    getNeewMoviesPage: (moviesName: string, currentPage: number, genre: number, year: number) => void
}


const mapStatetoProps = (state: AppStateType) => {
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
