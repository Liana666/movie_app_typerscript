import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getVideo } from "../../api/api";
import { addActorsWithCrewThunk } from "../../redux/reducers/singleReducer";
import { AppStateType } from "../../redux/store";
import { ActorsType, CrewType } from "../../types/type";


const SingleMovieContainer = React.memo(function SingleMovieContainer(props: PropsType) {

    let key_video = [];
    const [key, setKey] = useState([]);

    useEffect(() => {
        getVideo(props.location.state.id)
            .then((response: any) => {
                setKey(response.data.results);
            });
    }, [setKey]);

    if (key.length > 0) {
        key.map(key => key_video.push(key.key))
    }

    useEffect(() => {
        props.addCrewAndActors(props.location.state.id);
    }, []);


    return (
        <>
        <SingleMovie
                title= { props.location.state.title }
    vote_average = { props.location.state.vote_average }
    release_date = { props.location.state.release_date }
    back = { props.location.state.back }
    poster = { props.location.state.poster }
    overview = { props.location.state.overview }
    actors = { props.actors }
    crew = { props.crew }
    addCasts = { props.addCasts }
    single_genres = { props.location.state.single_genres }
    key_video = { key_video }
    id = { props.location.state.id }
        />
        </>
    )
})

type OwnProps = {
    id: number
    title: string
    vote_average: number
}

type MapStatePropsType = {
    actors: Array<ActorsType>
    crew: Array<CrewType>
}

type MapDispatchPropsType = {
    addCrewAndActors: (id: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps;

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        crew: state.SinglePage.crew,
        actors: state.SinglePage.actors
    }
}


export default connect(mapStatetoProps, { addCrewAndActors: addActorsWithCrewThunk })(SingleMovieContainer);