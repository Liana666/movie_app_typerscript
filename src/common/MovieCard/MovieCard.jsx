import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeFavoriteMoviesAC, removeFavoriteIdAC } from "../../redux/reducers/profileReducer";

import fire from "../../img/fire-abs.png";
import favorites from "../../img/favorites.png";
import check from "../../img/check.png";
import plus from "../../img/plus.png";

import PieChard from "./PieChard";

import card from "./MovieCard.module.css";


const MovieCard = (props) => {
    const dispatch = useDispatch();

    const imgSrc = 'https://image.tmdb.org/t/p/original/' + props.poster_path;

    const addFavorite = (e) => {
        props.addFavorite(imgSrc, props.id);
    }

    const removeFavorite = () => {
        dispatch(removeFavoriteIdAC(props.id));
        dispatch(removeFavoriteMoviesAC(imgSrc + props.poster));
    }

    console.log(props.favoriteMovies)

    return (
        <div className={card.grid_item}>
            {props.favoriteId.includes(props.id) ?
                <div onClick={removeFavorite} className={card.favorites}>
                    <img className={card.favorite_item} src={favorites} />
                    <img className={card.favorite} src={check} />
                </div>
                : <div onClick={addFavorite} className={card.favorites}>
                    <img className={card.favorite_item} src={favorites} />
                    <img className={card.favorite} src={plus} />
                </div>
            }



            <img className={card.card_img} src={fire} />
            <span className={card.card_age}>
                {props.adult ? <span>18+</span> : null}
            </span>
            <div className={card.path_wrapper}>
                {props.rated.map(rate => rate.img === imgSrc ?
                    <div className={card.over}>
                        <span className={card.over_vote}>{rate.vote}/5</span>
                    </div>
                    : null
                )}

                <img src={imgSrc} className={card.movie_img} alt="" />
            </div>

            <div className={card.card_info_top}>
                <div className={card.title}>{props.title}</div>
                <div className={card.info_movie}>
                    <div>
                        <div>Дата: <span className={card.date}>{props.release_date}</span></div>
                        <div className={card.genre_wrapper}><span className={card.genre_title}>Жанры:</span>
                            {props.single_genres.length !== 0 ? props.single_genres.map(g => <span key={g.id} className={card.genre}>{g}</span>)
                                : null}
                        </div>
                        <div className={card.vote_mob}>Рейтинг: <span className={card.date}>{props.vote_average}</span></div>
                    </div>
                    <div className={card.chard_wrapper}>
                        <PieChard vote={props.vote_average} />
                        <span className={card.chard}>{props.vote_average}</span>
                    </div>
                </div>
            </div>

            <div className={card.card_info_bottom}>
                <div className={card.text}>
                    {props.overview.slice(0, 145) + '...'}
                </div>


                <Link to={{
                    pathname: '/singlemovie',
                    state:
                    {
                        title: props.title,
                        back: props.backdrop_path,
                        poster: props.poster_path,
                        vote_average: props.vote_average,
                        overview: props.overview,
                        id: props.id,
                        release_date: props.release_date,
                        single_genres: props.single_genres,
                    }
                }}>
                    <div className={card.btn}>Подробнее о фильме</div>
                </Link>
            </div>


        </div >
    )
}



export default MovieCard;