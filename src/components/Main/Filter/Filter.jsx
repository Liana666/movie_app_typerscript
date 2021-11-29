import React from "react";

import filter from "./Filter.module.css";

import PagintationContainer from "../../../common/Pagination/PagintationContainer";
import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";


const Filter = (props) => {

    const changeGenreOption = (e) => {
        let optionGenres = e.target.value;
        props.changeGenre(props.currentPage, optionGenres)
    }

    const changeYearOption = (e) => {
        let optionYears = e.target.value;
        props.changeYear(props.currentPage, props.genre, optionYears);
    }

    return (
        <>
            <div className={filter.filterWrapper}>
                <select value={props.genre} onChange={changeGenreOption} style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option className={filter.option}>Все</option>
                    {props.genres.map(g => <option ley={g.id} value={g.id}>{g.name}</option>
                    )}
                </select>
                <select value={props.year} onChange={changeYearOption} className={filter.select} name="years" id="">
                    <option className={filter.option}>Годы</option>
                    {props.years.map(y => <option key={y.id} value={y}>{y}</option>
                    )}
                </select>
            </div>

            <div className="container_grid">

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

            </div>


            {props.movies.length > 0 && props.currentPage < props.totalPages ?
                <PagintationContainer />
                : null
            }
        </>
    )
}


export default Filter;