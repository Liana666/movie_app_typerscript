import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { getVideo } from "../../api/api";
import { addActorsWithCrewThunk } from "../../redux/reducers/singleReducer";
import { AppStateType } from "../../redux/store";
import { ActorsType, CrewType, VideoType } from "../../types/type";
import { compose } from 'redux';
import SingleMovie from './SingleMovie';

type PropsType = MapStatePropsType & MapDispatchPropsType;

const SingleMovieContainer = (props: PropsType) => {

    const {
        actors,
        crew,
        addCrewAndActors
    } = props;

    const { state } = useLocation<OwnProps>();

    let key_video: Array<string> = [];
    const [key, setKey] = useState<VideoType[]>([]);

    useEffect(() => {// Получаем трейлер фильма
        getVideo(state.id)
            .then((response: any) => {
                setKey(response.data.results);
            });
    }, [state.id]);

    if (key.length > 0) {
        key.map(key => key_video.push(key.key))
    }

    useEffect(() => { // Получаем список актеров
        addCrewAndActors(state.id);
    }, [state.id]);


    return (
        <SingleMovie
            key_video={key_video}
            actors={actors}
            crew={crew}
            {...state} />
    )
}

type OwnProps = {
    title: string
    back: string
    poster: string
    vote_average: number
    overview: string
    id: number
    release_date: number
    single_genres: Array<string>
}

type MapStatePropsType = {
    actors: Array<ActorsType>
    crew: Array<CrewType>
}

type MapDispatchPropsType = {
    addCrewAndActors: (id: number) => void
}

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        crew: state.SinglePage.crew,
        actors: state.SinglePage.actors
    }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStatetoProps,
    { addCrewAndActors: addActorsWithCrewThunk }))
    (SingleMovieContainer);