import React, { useEffect } from "react";

import styled from "styled-components";
import single from "./SingleMovie.module.css";

import PieChard from "../Main/MovieCard/PieChard";

import favorit from "../../img/fav.png";
import arrow from "../../img/arrow.png";
import ActorsCard from "./ActorsCard/ActorsCard";

const SingleMovie = (props) => {

    const imgSrc = 'https://image.tmdb.org/t/p/original/';


    return (
        <>
            <BackgroundMovie>
                <div className={single.background_color}></div>
                <img className={single.background} src={imgSrc + props.back} />
                <div className={single.container}>
                    <div className={single.poster_wrapper}>
                        <img className={single.poster} src={imgSrc + props.poster} />
                    </div>

                    <div className={single.info_wrapper}>
                        <div className={single.title}>
                            {props.title}
                        </div>
                        <ul className={single.subtitle}>
                            <span className={single.date}>2020г.</span>
                            <li>История, драма</li>
                        </ul>


                        <Info>
                            <div className={single.video_wrapper}>
                                <div className={single.viedeo_container}>
                                    <img className={single.arrow} src={arrow} />
                                    Трейлер
                                </div>
                                <div className={single.favorit}>
                                    <img src={favorit} />

                                </div>
                                <span className={single.favorit_title}>Добавить в избранное</span>
                            </div>

                            <div className={single.favorit_vote}>
                                <Chard>
                                    <PieChard className={single.chart_wrapper} vote={props.vote_average} />
                                    <span className={single.chard}>{props.vote_average}</span>
                                </Chard>
                                <span className={single.chart_title}>Пользовательский рейтинг</span>
                            </div>
                        </Info>

                        <div>
                            <div className={single.description_title}>
                                Обзор
                            </div>
                            <div className={single.description}>
                                {props.overview}
                            </div>
                        </div>

                    </div>

                </div>
            </BackgroundMovie>

            <CastWrapper>
                <div className={single.actors_title}>Актерский состав</div>
                <Cast>
                    {props.actors.map(actors => <ActorsCard
                        name={actors.name}
                        profile_path={actors.profile_path}
                        character={actors.character}
                    />)}
                </Cast>
            </CastWrapper>


        </>
    )
}

const BackgroundMovie = styled.div`
    position: relative; 
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    height: 700px;
`

const Chard = styled.div`
    position: relative;
    display: flex;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const CastWrapper = styled.div`
    max-width: 1400px;
    margin: 50px auto;
`

const Cast = styled.div`
    display: flex;
    overflow-x: scroll;
    overflow-y: auto;

`

export default SingleMovie;