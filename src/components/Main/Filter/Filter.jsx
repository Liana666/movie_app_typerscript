import React from "react";

import styled from "styled-components";
import filter from "./Filter.module.css";

import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";
import PagintationContainer from "../../../common/Pagination/PagintationContainer";


const Filter = (props) => {


    const changeOption = (e) => {
        let optionGenres = e.target.value;
        props.addGenre(optionGenres);
        props.addMovies(props.currentPage, optionGenres);
        props.searchMovie('');

    }

    const changeYear = (e) => {
        let optionYears = e.target.value;
        props.addYear(optionYears);
        props.searchMovie('');
        props.addMovies(props.currentPage, props.genre, optionYears);
    }

    return (
        <>
            <FilterWrapper>
                <select value={props.genre} onChange={changeOption} style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option className={filter.option}>Все</option>
                    {props.genres.map(g => <option value={g.id}>{g.name}</option>
                    )}
                </select>
                <select value={props.year} onChange={changeYear} className={filter.select} name="years" id="">
                    <option className={filter.option}>Годы</option>
                    {props.years.map(y => <option value={y}>{y}</option>
                    )}

                </select>
            </FilterWrapper>


            <MoviesCard>
                {props.movies.map(m => <MovieCardContainer
                    key={m.id}
                    title={m.title}
                    overview={m.overview}
                    poster_path={m.poster_path}
                    release_date={m.release_date}
                    vote_average={m.vote_average}
                    genre_ids={m.genre_ids}
                    adult={m.adult}
                    backdrop_path={m.backdrop_path}
                    video={m.video}
                    id={m.id}
                />)}
            </MoviesCard>

            {props.movies.length > 0 && props.currentPage < props.totalPages ?
                <PagintationContainer />
                : null
            }

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
    justify-content:spaxce-between;
    flex-wrap: wrap;
`

export default Filter;