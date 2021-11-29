import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import single from "./SingleMovie.module.css";

import PieChard from "../../common/MovieCard/PieChard";

import favorit from "../../img/fav.png";
import arrow from "../../img/arrow.png";
import check from "../../img/check2.png";

import { addFavoriteMoviesAC, addFavoriteIdAC, removeFavoriteIdAC, removeFavoriteMoviesAC } from "../../redux/reducers/profileReducer";
import ActorsCard from "./ActorsCard/ActorsCard";

const SingleMovie = (props) => {
    const imgSrc = 'https://image.tmdb.org/t/p/original/';
    const videoUrl = 'https://www.youtube.com/watch?v=';
    const video = props.key_video.slice(0, 1);
    const dispatch = useDispatch();
    const favoriteId = useSelector((state) => state.ProfilePage.favoriteId);

    const addFavorite = () => {
        dispatch(addFavoriteIdAC(props.id));
        dispatch(addFavoriteMoviesAC(imgSrc + props.poster));
    }

    const removeFavorite = () => {
        dispatch(removeFavoriteIdAC(props.id));
        dispatch(removeFavoriteMoviesAC(imgSrc + props.poster));
    }


    return (
        <>
            <div className={single.backgroundMovie}>
                <div className={single.background_color}></div>
                <img className={single.background} src={imgSrc + props.back} />
                <div className={single.container}>
                    <div className={single.wrapper}>
                        <div className={single.poster_wrapper}>
                            <img className={single.poster} src={imgSrc + props.poster} />
                        </div>


                        <div className={single.info_top}>
                            <div className={single.title}>
                                {props.title}
                            </div>
                            <ul className={single.subtitle}>
                                <span className={single.date}>{props.release_date}</span>
                                <span className={single.marker}>·</span>
                                {props.single_genres.map(g => <span key={g.id} className={single.date}>{g}</span>)}
                            </ul>


                            <div className={single.info}>
                                <div className={single.video_wrapper}>
                                    {video.map(k => <a href={videoUrl + k}>
                                        <div className={single.viedeo_container}>
                                            <img className={single.arrow} src={arrow} />
                                            Трейлер
                                        </div>
                                    </a>)}

                                    {favoriteId.includes(props.id) ?
                                        <div className={single.addfavorite}>
                                            <div onClick={removeFavorite} className={single.favorit}>
                                                <img className={single.check} src={check} />
                                            </div>
                                            <span className={single.favorit_title}>Удалить из избранного</span>
                                        </div>

                                        : <div className={single.addfavorite}>
                                            <div onClick={addFavorite} className={single.favorit}>
                                                <img src={favorit} />
                                            </div>
                                            <span className={single.favorit_title}>Добавить в избранное</span>
                                        </div>
                                    }

                                </div>

                                <div className={single.favorit_vote}>
                                    <div className={single.chard_container}>
                                        <PieChard className={single.chart_wrapper} vote={props.vote_average} />
                                        <span className={single.chard}>{props.vote_average}</span>
                                    </div>
                                    <span className={single.chart_title}>Пользовательский рейтинг</span>
                                </div>
                            </div>
                        </div>

                        <div className={single.info_bottom}>
                            <div>
                                <div className={single.description_title}>
                                    Обзор
                                </div>
                                <div className={single.description}>
                                    {props.overview}
                                </div>
                            </div>

                            <div className={single.crewWrapper}>

                                {props.crew.map(crew => crew.job === "Producer" ?
                                    <div className={single.crew_cart}>
                                        <div className={single.producer}>
                                            <div key={crew.id}>{crew.name}</div>
                                        </div>
                                        <div className={single.crew_job}>
                                            Продюсер
                                        </div>
                                    </div>
                                    : null)}


                                {props.crew.map(crew => crew.job === "Director" ?
                                    <div className={single.crew_cart}>
                                        <div className={single.producer}>
                                            <div key={crew.id}>{crew.name}</div>
                                        </div>
                                        <div className={single.crew_job}>
                                            Режиссер
                                        </div>
                                    </div>
                                    : null)}


                                {props.crew.map(crew => crew.job === "Editor" ?
                                    <div className={single.crew_cart}>
                                        <div className={single.producer}>
                                            <div key={crew.id}>{crew.name}</div>
                                        </div>
                                        <div className={single.crew_job}>
                                            Автор
                                        </div>
                                    </div>
                                    : null)}

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={single.cast_container}>
                <div className={single.actors_title}>Актерский состав</div>
                <div className={single.cast_wrapper}>
                    {props.actors.map(actors => <ActorsCard
                        key={actors.id}
                        name={actors.name}
                        profile_path={actors.profile_path}
                        character={actors.character}
                    />)}
                </div>
            </div>


        </>
    )
}

export default SingleMovie;