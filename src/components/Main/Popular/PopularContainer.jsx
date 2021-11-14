import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPopularThunk, changePagePopularThunk } from "../../../redux/reducers/mainReducer";

import Popular from "./Popular";

const PopularContainer = (props) => {

    useEffect(() => {
        props.addPopular();
    }, [props.changePage])

    return (
        <>
            <Popular
                popular={props.popular}
                genre={props.genre}
                year={props.year}
                moviesName={props.moviesName}
                totalPages={props.totalPages}
                changePage={props.changePage}
                currentPagePopular={props.currentPagePopular}
            />
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        popular: state.MainPage.popular,
        genre: state.MainPage.genre,
        year: state.MainPage.year,
        moviesName: state.MainPage.moviesName,
        currentPagePopular: state.MainPage.currentPagePopular,
        totalPages: state.MainPage.totalPages
    }
}



export default connect(mapStatetoProps, { addPopular: getPopularThunk, changePage: changePagePopularThunk })(PopularContainer);