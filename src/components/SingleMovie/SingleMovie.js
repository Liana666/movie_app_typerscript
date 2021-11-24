import React from "react";

import styled from "styled-components";
import single from "./SingleMovie.module.css";

import PieChard from "../../common/MovieCard/PieChard";

import favorit from "../../img/fav.png";
import arrow from "../../img/arrow.png";
import ActorsCard from "./ActorsCard/ActorsCard";

const SingleMovie = (props) => {
    const imgSrc = 'https://image.tmdb.org/t/p/original/';
    const videoUrl = 'https://www.youtube.com/watch?v=';
    const video = props.key_video.slice(0, 1);

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
                            <span className={single.date}>{props.release_date}</span>
                            <span className={single.marker}>·</span>
                            {props.single_genres.map(g => <span key={g.id} className={single.date}>{g}</span>)}
                        </ul>


                        <Info>
                            <div className={single.video_wrapper}>
                                {video.map(k => <a href={videoUrl + k}>
                                    <div className={single.viedeo_container}>
                                        <img className={single.arrow} src={arrow} />
                                        Трейлер
                                    </div>
                                </a>)}
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

                        <CrewWrapper>

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

                        </CrewWrapper>


                    </div>

                </div>
            </BackgroundMovie>

            <CastWrapper>
                <div className={single.actors_title}>Актерский состав</div>
                <div className={single.cast_wrapper}>
                    {props.actors.map(actors => <ActorsCard
                        key={actors.id}
                        name={actors.name}
                        profile_path={actors.profile_path}
                        character={actors.character}
                    />)}
                </div>
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

const CrewWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

`

// const Cast = styled.div`
//     display: flex;
//     overflow-x: scroll;
//     overflow-y: auto;

// `

export default SingleMovie;