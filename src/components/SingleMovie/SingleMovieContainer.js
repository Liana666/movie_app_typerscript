import React from "react";

import SingleMovie from "./SingleMovie";

const SingleMovieContainer = (props) => {


    return (
        <>
            <SingleMovie
                title={props.location.state.title}
                back={props.location.state.back}
            />

        </>
    )
}

export default SingleMovieContainer;