import React from "react";

import styled from "styled-components";
import filter from "./Filter.module.css";

import MovieCardContainer from "../MovieCard/MovieCardContainer";


const Filter = (props) => {

    function pageNumber() {
        if (props.totalPages < 20) {
            return props.totalPages;
        }
        else {
            return 20;
        }
    }

    let pages = [];

    for (let i = 1; i <= pageNumber(); i++) {
        pages.push(i);
    }

    const onChangePage = (currentPage) => {
        props.getNeewMoviesPage(currentPage, props.optionSelected);
        window.scrollTo(0, 0);
    }


    return (
        <>
            <FilterWrapper>
                <select onChange={props.changeOption} style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option className={filter.option}>Все</option>
                    {props.genres.map(g => <option value={g.id}>{g.name}</option>
                    )}
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">2020г.</option>
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">Япония</option>
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
                />)}
            </MoviesCard>

            {props.movies.length > 0 ?
                < Pagination >
                    {pages.map(p => <div className={filter.page} onClick={() => onChangePage(p)}><span className={p === props.currentPage ? filter.currentpage : null}>{p}</span></div>)}
                </Pagination>
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

const Pagination = styled.div`
   display: flex;
   justify-content: flex-end;
`

export default Filter;