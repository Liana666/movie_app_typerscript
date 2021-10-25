import React from "react";

import styled from "styled-components";
import MovieCard from "../MovieCard/MovieCard";
import filter from "./Filter.module.css";

const Filter = (props) => {
    return (
        <>
            <FilterWrapper>
                <select style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option value="">Комедия</option>
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">2020г.</option>
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">Япония</option>
                </select>
            </FilterWrapper>
            <MoviesCard>
                {props.movies.map(m => <MovieCard
                    title={m.title}
                    overview={m.overview}
                    poster_path={m.poster_path}
                    release_date={m.release_date}
                    vote_average={m.vote_average}
                    genre_ids={m.genre_ids}
                    adult={props.adult}

                />)}
            </MoviesCard>


        </>
    )
}

const FilterWrapper = styled.div`
    margin: 7px 0 30px 0;
    display: flex;
    align-items: center;
`
const MoviesCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export default Filter;