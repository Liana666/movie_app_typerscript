import React from "react";

import SingleMovie from "./SingleMovie";

const SingleMovieContainer = (props) => {


    return (
        <>
            <SingleMovie
                title={props.location.state.title}
                back={props.location.state.back}
                poster={props.location.state.poster}
                vote_average={props.location.state.vote_average}
            />

        </>
    )
}

export default SingleMovieContainer;