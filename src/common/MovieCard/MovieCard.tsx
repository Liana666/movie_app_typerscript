import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFavoriteMoviesAC, removeFavoriteIdAC, addFavoriteIdAC, addFavoriteMoviesAC } from "../../redux/reducers/profileReducer";

import fire from "../../img/fire-abs.png";
import favorites from "../../img/favorites.png";
import check from "../../img/check.png";
import plus from "../../img/plus.png";

import PieChard from "./PieChard";

import card from "./MovieCard.module.css";
import { MovieType, RatedType } from "../../types/type";

type OwnPropsType = {
    favoriteId: Array<number>
    rated: Array<RatedType>
    single_genres: Array<string>
}

type PropsType = OwnPropsType & MovieType;

const MovieCard: React.FC<PropsType> = ({
    poster_path,
    id,
    favoriteId,
    adult, rated,
    title,
    single_genres,
    vote_average,
    release_date,
    overview,
    backdrop_path
}) => {


    const dispatch = useDispatch();
    const imgSrc = 'https://image.tmdb.org/t/p/original/' + poster_path;

    const addNewFavorite = () => { // Добавляем в избранные
        dispatch(addFavoriteIdAC(id));
        dispatch(addFavoriteMoviesAC(imgSrc));
    }

    const removeFavorite = () => { // Удаляем с избранныx
        dispatch(removeFavoriteIdAC(id));
        dispatch(removeFavoriteMoviesAC(imgSrc));
    }

    return (
        <div className={card.grid_item}>
            {/* Выбор иконки в зависимости от того, есть ли текущий фильм в массиве избранных*/}
            {favoriteId.includes(id) ?
                <div onClick={removeFavorite} className={card.favorites}>
                    <img
                        className={card.favorite_item}
                        src={favorites}
                        alt=""
                    />
                    <img
                        className={card.favorite}
                        src={check}
                        alt=""
                    />
                </div>
                : <div onClick={addNewFavorite} className={card.favorites}>
                    <img
                        className={card.favorite_item}
                        src={favorites}
                        alt=""
                    />
                    <img
                        className={card.favorite}
                        src={plus}
                        alt=""
                    />
                </div>
            }

            <img
                className={card.card_img}
                src={fire}
                alt=""
            />
            <span className={card.card_age}>
                {adult ? <span>18+</span> : null}
            </span>
            <div className={card.path_wrapper}>
                {rated.map(rate => rate.img === imgSrc ?
                    <div className={card.over}>
                        <span key={rate.vote} className={card.over_vote}>{rate.vote}/5</span>
                    </div>
                    : null
                )}

                <img
                    src={imgSrc}
                    className={card.movie_img}
                    alt=""
                />
            </div>

            <div className={card.card_info_top}>
                <div className={card.title}>{title}</div>
                <div className={card.info_movie}>
                    <div>
                        <div>Дата: <span className={card.date}>{release_date}</span></div>
                        <div className={card.genre_wrapper}><span className={card.genre_title}>Жанры:</span>
                            {single_genres.length !== 0 ? single_genres.map(g => <span key={g} className={card.genre}>{g}</span>)
                                : null}
                        </div>
                        <div className={card.vote_mob}>Рейтинг: <span className={card.date}>{vote_average}</span></div>
                    </div>
                    <div className={card.chard_wrapper}>
                        <PieChard vote={vote_average} />
                        <span className={card.chard}>{vote_average}</span>
                    </div>
                </div>
            </div>

            <div className={card.card_info_bottom}>
                <div className={card.text}>
                    {overview.slice(0, 145) + '...'}
                </div>


                <Link to={{
                    pathname: '/singlemovie',
                    state:
                    {
                        title: title,
                        back: backdrop_path,
                        poster: poster_path,
                        vote_average: vote_average,
                        overview: overview,
                        id: id,
                        release_date: release_date,
                        single_genres: single_genres,
                    }
                }}>
                    <div className={card.btn}>Подробнее о фильме</div>
                </Link>
            </div>


        </div >
    )
}



export default MovieCard;