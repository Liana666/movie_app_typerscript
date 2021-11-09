import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPopularThunk } from "../../../redux/reducers/mainReducer";

import Popular from "./Popular";

const PopularContainer = React.memo(function PopularContainer(props) {

    useEffect(() => {
        props.addPopular();
    }, [])

    return (
        <>
            <Popular
                popular={props.popular}
                genre={props.genre}
                year={props.year}
                moviesName={props.moviesName}
            />
        </>
    )
})

const mapStatetoProps = (state) => {
    return {
        popular: state.MainPage.popular,
        genre: state.MainPage.genre,
        year: state.MainPage.year,
        moviesName: state.MainPage.moviesName
    }
}



export default connect(mapStatetoProps, { addPopular: getPopularThunk })(PopularContainer);