import React, { useEffect, useState, FC } from "react";
import { connect } from "react-redux";
import { changeGenreThunk, changeYearThunk } from "../../../redux/reducers/mainReducer";
import { getGenres } from "../../../api/api";

import Filter from "./Filter";
import { GenreType, MovieType } from "../../../types/type";
import { AppStateType } from "../../../redux/store";
import { compose } from "redux";

type PropsType = MapDispatchPropsType & MapStatePropsType;

const FilterContainer: React.FC<PropsType> = ({
    genre,
    years,
    year,
    popular,
    movies,
    currentPage,
    totalPages,
    changeGenre,
    changeYear,
    isAddPopular
}) => {

    const [genres, setGenres] = useState<GenreType[]>([]);

    useEffect(() => { // Получаем список всех жанров
        getGenres()
            .then((response) => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);


    return (
        <>
            <Filter
                genres={genres}
                genre={genre}
                years={years}
                year={year}
                movies={movies}
                popular={popular}
                currentPage={currentPage}
                totalPages={totalPages}
                changeGenre={changeGenre}
                changeYear={changeYear}
                isAddPopular={isAddPopular}
            />
        </>
    )
}

type MapStatePropsType = {
    genre: number
    year: number
    years: Array<number>
    movies: Array<MovieType>
    popular: Array<MovieType>
    totalPages: number
    currentPage: number
    isAddPopular: boolean
}

type MapDispatchPropsType = {
    changeGenre: (page: number, genre: number, year?: number) => void
    changeYear: (page: number, genre: number, year: number) => void
}

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        genre: state.MainPage.genre,
        movies: state.MainPage.movies,
        popular: state.MainPage.popular,
        totalPages: state.MainPage.totalPages,
        currentPage: state.MainPage.currentPage,
        years: state.MainPage.years,
        year: state.MainPage.year,
        isAddPopular: state.MainPage.isAddPopular
    }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStatetoProps,
    { changeYear: changeYearThunk, changeGenre: changeGenreThunk }))
    (FilterContainer);
