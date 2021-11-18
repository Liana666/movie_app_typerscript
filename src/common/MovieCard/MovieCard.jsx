import React, { useEffect } from "react";
import { useState } from "react";

import fire from "../../img/fire-abs.png";
import favorites from "../../img/favorites.png";
import check from "../../img/check.png";
import plus from "../../img/plus.png";

import PieChard from "./PieChard";

import card from "./MovieCard.module.css";
import styled from "styled-components";
import { Link } from "react-router-dom";


const MovieCard = (props) => {

    const imgSrc = 'https://image.tmdb.org/t/p/original/' + props.poster_path;

    console.log(props.favoriteId)


    const addFavorite = (e) => {
        props.addFavorite(imgSrc, props.id);
    }

    return (
        <Card>
            <div onClick={addFavorite} className={card.favorites}>
                <img className={card.favorite_item} src={favorites} />
                {props.favoriteId.includes(props.id) ?
                    <img className={card.favorite} src={check} />
                    : <img className={card.favorite} src={plus} />
                }
            </div>


            <Card_img src={fire} />
            <Card_age>
                {props.adult ? <span>18+</span> : null}
            </Card_age>
            <div>
                <img src={imgSrc} className={card.movie_img} alt="" />
            </div>
            <Card_info>
                <div className={card.title}>{props.title}</div>
                <Info_movie>
                    <div>
                        <div>Дата: <span className={card.date}>{props.release_date}</span></div>
                        <div className={card.genre_wrapper}><span className={card.genre_title}>Жанры:</span>
                            {props.single_genres.length !== 0 ? props.single_genres.map(g => <span key={g.id} className={card.genre}>{g}</span>)
                                : null}
                        </div>
                    </div>
                    <Chard>
                        <PieChard vote={props.vote_average} />
                        <span className={card.chard}>{props.vote_average}</span>
                    </Chard>
                </Info_movie>

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




            </Card_info>
        </Card >
    )
}


const Card = styled.div`
    position: relative;
    padding: 25px;

    margin: 10px;

    width: 45%;

    display: flex;

    background: #1E273A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 43px;

    overflow: hidden;
`

const Card_img = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;
`

const Card_age = styled.span`
    position: absolute;
    bottom: 25px;
    right: 30px;

    color: #1E273A;
    font-size: 18px;
`

const Card_info = styled.div`
    margin-left: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`


const Info_movie = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;
    line-height: 170%;
`

const Chard = styled.div`
    position: relative;
`


export default MovieCard;