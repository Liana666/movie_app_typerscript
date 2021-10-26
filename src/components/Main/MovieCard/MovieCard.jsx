import React from "react";
import { useEffect, useState } from "react";

import fire from "../../../img/fire-abs.png";
import favorites from "../../../img/favorites.png";

import PieChard from "../PieChard";
import { getGenres } from "../../../api/api";

import card from "./MovieCard.module.css";
import styled from "styled-components";

const MovieCard = (props) => {

    const imgSrc = 'https://image.tmdb.org/t/p/original/';
    const [genres, setGenres] = useState([]);
    let mapGenres = new Map();

    useEffect(() => {
        getGenres('list?')
            .then(response => {
                setGenres(response.data.genres);
            });
    })

    genres.map(g => {
        mapGenres.set(g.id, g.name);
    })

    return (
        <Card>
            <div className={card.favorites}>
                <img src={favorites} />
                <span>+</span>
            </div>


            <Card_img src={fire} />
            <Card_age>
                {props.adult === 'true' ? '18+' : null}
            </Card_age>

            <div>
                <img src={imgSrc + props.poster_path} className={card.movie_img} alt="" />
            </div>
            <Card_info>
                <div className={card.title}>{props.title}</div>

                <Info_movie>
                    <div>
                        <div>Дата: <span className={card.date}>{props.release_date}</span></div>
                        <div className={card.genre_wrapper}><span className={card.genre_title}>Жанры:</span>
                            {mapGenres.size !== 0 ? props.genre_ids.map(g => mapGenres.has(g) ? <span key={g.id} className={card.genre}>{mapGenres.get(g)}</span>
                                : null)
                                : null}
                        </div>
                    </div>
                    <Chard>
                        <PieChard />
                        <span className={card.chard}>{props.vote_average}</span>
                    </Chard>


                </Info_movie>

                <div className={card.text}>
                    {props.overview.slice(0, 145) + '...'}
                </div>

                <Btn_movie>Подробнее о фильме</Btn_movie>

            </Card_info>
        </Card >
    )
}


const Card = styled.div`
    position: relative;
    padding: 20px;
    margin: 10px;
    margin-bottom: 20px;

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

const Btn_movie = styled.div`
    width: 150px;

    padding: 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: #1E273A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7px;

    font-size: 11px;

    color: #FFF7F7;
`

const Chard = styled.div`
    position: relative;
`


export default MovieCard;