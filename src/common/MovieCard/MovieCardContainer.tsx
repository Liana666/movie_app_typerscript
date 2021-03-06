import React, { useState, useEffect, FC } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import { AppStateType } from "../../redux/store";

import { GenreType, MovieType, RatedType } from "../../types/type";

import { getGenres } from "../../api/api";

import MovieCard from "./MovieCard";


type PropsType = MapStatePropsType & MovieType;

const MovieCardContainer = (props: PropsType) => {
    const {
        title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genre_ids,
        backdrop_path,
        adult,
        id,
        favoriteId,
        rated,
    } = props;

    const [genres, setGenres] = useState<GenreType[]>([]);
    let mapGenres = new Map();
    let single_genres: Array<string> = [];

    useEffect(() => {// Получаем список всх жанров (name, id)
        getGenres()
            .then((response) => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    genres.map((g: GenreType) => { // Добавляем в Map, где ключ id, значение name
        return mapGenres.set(g.id, g.name);
    })

    genre_ids.map((g: GenreType) => { // Получаем соотвутсвующие имена жанров на основе массива жанров текущего фильма
        if (mapGenres.has(g)) {
            return single_genres.push(mapGenres.get(g));
        }
        else { return null }
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

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        favoriteId: state.ProfilePage.favoriteId,
        rated: state.ProfilePage.rated
    }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, null, null, AppStateType>(mapStatetoProps))
    (MovieCardContainer);
