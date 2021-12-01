import React, { FC } from "react";

import filter from "./Filter.module.css";

import PagintationContainer from "../../../common/Pagination/PagintationContainer";
import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";
import { FilterType } from "../../../types/type";



const Filter: FC<FilterType> = ({ changeGenre, currentPage, changeYear, genre, genres, year, years, movies, totalPages }) => {

    const changeGenreOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let optionGenres = +e.target.value;
        changeGenre(currentPage, optionGenres)
    }


    const changeYearOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let optionYears = +e.target.value;
        changeYear(currentPage, genre, optionYears);
    }

    return (
        <>
            <div className={filter.filterWrapper}>
                <select value={genre} onChange={changeGenreOption} style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option className={filter.option}>Все</option>
                    {genres.map(g => <option key={g.id} value={g.id}>{g.name}</option>
                    )}
                </select>
                <select value={year} onChange={changeYearOption} className={filter.select} name="years" id="">
                    <option className={filter.option}>Годы</option>
                    {years.map(y => <option key={y} value={y}>{y}</option>
                    )}
                </select>
            </div>

            <div className="container_grid">

                {movies.map(m => <MovieCardContainer
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


            {movies.length > 0 && currentPage < totalPages ?
                <PagintationContainer />
                : null
            }
        </>
    )
}


export default Filter;