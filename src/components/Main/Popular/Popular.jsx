import React from "react";

import popular from "./Popular.module.css";

import styled from "styled-components";
import MovieCard from "../../../common/MovieCard/MovieCardContainer";

const Popular = (props) => {

    const changePage = () => {
        props.changePage(props.currentPagePopular + 1);
    }

    return (
        <>
            {
                props.genre === 0 && props.year === 0 && props.moviesName === '' ?
                    <MoviesCard>
                        {props.popular.map(m => <MovieCard
                            key={m.id}
                            title={m.title}
                            overview={m.overview}
                            poster_path={m.poster_path}
                            release_date={m.release_date}
                            vote_average={m.vote_average}
                            genre_ids={m.genre_ids}
                            adult={m.adult}
                            backdrop_path={m.backdrop_path}
                            id={m.id}
                        />)}
                        {props.currentPagePopular < props.totalPages ?
                            <div className={popular.wrapper}>
                                <div className={popular.btn} onClick={changePage}>Загрузить еще</div>
                            </div>

                            : null
                        }
                    </MoviesCard>
                    : null
            }


        </>
    )
}

const MoviesCard = styled.div`
    width: 100%;
    display: flex;
    justify-content:spaxce-between;
    flex-wrap: wrap;
`

export default Popular;