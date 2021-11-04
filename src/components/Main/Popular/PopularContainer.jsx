import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPopularThunk } from "../../../redux/reducers/mainReducer";

import Popular from "./Popular";

const PopularContainer = (props) => {

    useEffect(() => {
        props.addPopular();
    }, [])

    return (
        <>
            <Popular popular={props.popular} />
        </>
    )
}

const mapStatetoProps = (state) => {
    return {
        popular: state.MainPage.popular
    }
}



export default connect(mapStatetoProps, { addPopular: getPopularThunk })(PopularContainer);