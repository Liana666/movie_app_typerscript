import React from "react";

const SingleMovieContainer = (props) => {


    return (
        <div>
            {props.match.params.movieid}
        </div>
    )
}

export default SingleMovieContainer;