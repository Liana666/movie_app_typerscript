import React, { useEffect, useState } from "react";

import { getCast } from "../../api/api";

import SingleMovie from "./SingleMovie";

const SingleMovieContainer = (props) => {

    const [actors, setActors] = useState([]);

    useEffect(() => {
        getCast(props.location.state.id)
            .then(response => {
                setActors(response.data.cast);
            });
    }, []);


    return (
        <>
            <SingleMovie
                title={props.location.state.title}
                back={props.location.state.back}
                poster={props.location.state.poster}
                vote_average={props.location.state.vote_average}
                overview={props.location.state.overview}
                actors={props.actors}
                addCasts={props.addCasts}
                actors={actors}
            />

        </>
    )
}

// const mapStatetoProps = (state) => {
//     return {
//         crew: state.SinglePage.crew,
//         actors: state.SinglePage.actors
//     }
// }

export default SingleMovieContainer;

// export default connect(mapStatetoProps, { addCasts: getCastThunk })(SingleMovieContainer);