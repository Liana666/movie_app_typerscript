import React, { useState, useEffect, FC } from "react";
import MovieCard from "./MovieCard";

import { connect } from "react-redux";

import { getGenres } from "../../api/api";

import { GenreType, MovieType, RatedType } from "../../types/type";
import { AppStateType } from "../../redux/store";
import { compose } from "redux";


const MovieCardContainer: FC<PropsType> = ({ title, overview,
    poster_path, release_date, vote_average, genre_ids, backdrop_path,
    adult, id, favoriteId, rated }) => {

    const [genres, setGenres] = useState<GenreType[]>([]);
    let mapGenres = new Map();
    let single_genres: any = [];

    useEffect(() => {
        getGenres()
            .then((response: any) => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    genres.map(g => {
        mapGenres.set(g.id, g.name);
    })

    genre_ids.map(g => {
        if (mapGenres.has(g)) {
            single_genres.push(mapGenres.get(g));
        }
    })


    return (
        <>
            <MovieCard
                title={title}
                overview={overview}
                poster_path={poster_path}
                release_date={release_date}
                vote_average={vote_average}
                genre_ids={genre_ids}
                adult={adult}
                backdrop_path={backdrop_path}
                single_genres={single_genres}
                id={id}
                favoriteId={favoriteId}
                rated={rated}
            />
        </>

    )
}

type MapStatePropsType = {
    favoriteId: Array<number>
    rated: Array<RatedType>
}


type PropsType = MapStatePropsType & MovieType;

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        favoriteId: state.ProfilePage.favoriteId,
        rated: state.ProfilePage.rated
    }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, null, null, AppStateType>(mapStatetoProps))
    (MovieCardContainer);