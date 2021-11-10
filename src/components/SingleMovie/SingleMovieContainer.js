import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getCast, getVideo } from "../../api/api";
import { getVideoThunk } from "../../redux/reducers/mainReducer";

import SingleMovie from "./SingleMovie";

const SingleMovieContainer = React.memo(function SingleMovieContainer(props) {

    const [actors, setActors] = useState([]);
    const [crew, setCrew] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [key, setKey] = useState([]);

    useEffect(() => {
        props.getVideo(props.location.state.id);
    }, []);


    useEffect(() => {
        getCast(props.location.state.id)
            .then(response => {
                setActors(response.data.cast);
                setCrew(response.data.crew);
            });
    }, []);

    console.log(props.key)
    return (
        <>
            <SingleMovie
                title={props.location.state.title}
                vote_average={props.location.state.vote_average}
                release_date={props.location.state.release_date}
                back={props.location.state.back}
                poster={props.location.state.poster}
                overview={props.location.state.overview}
                actors={props.actors}
                addCasts={props.addCasts}
                actors={actors}
                crew={crew}
                single_genres={props.location.state.single_genres}
                video={props.location.state.video}
                key={props.key}
            />


        </>
    )
})

// const mapStatetoProps = (state) => {
//     return {
//         crew: state.SinglePage.crew,
//         actors: state.SinglePage.actors
//     }
// }

const mapStatetoProps = (state) => {
    return {
        key: state.MainPage.key
    }
    debugger
}

export default connect(mapStatetoProps,
    { getVideo: getVideoThunk })
    (SingleMovieContainer);


// export default connect(mapStatetoProps, { addCasts: getCastThunk })(SingleMovieContainer);