import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addGenreAC, addPopularAC, getMoviesThunk, changePageThunk, addYearAC, searchMoviesThunk } from "../../../redux/reducers/mainReducer";
import { getGenres } from "../../../api/api";

import Filter from "./Filter";

const FilterContainer = (props) => {
    const [genres, setGenres] = useState([]);



    useEffect(() => {
        getGenres()
            .then(response => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);


    return (
        <>
            <Filter
                isLoaded={props.isLoaded}
                getNeewMoviesPage={props.getNeewMoviesPage}
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                movies={props.movies}
                addMovies={props.addMovies}
                addPopular={props.addPopular}
                genres={genres}
                genre={props.genre}
                addGenre={props.addGenre}
                years={props.years}
                addYear={props.addYear}
                year={props.year}
                moviesName={props.moviesName}
                getNewSearchMovies={props.getNewSearchMovies}
            />

        </>
    )
}


const mapStatetoProps = (state) => {
    return {
        moviesName: state.MainPage.moviesName,
        genre: state.MainPage.genre,
        movies: state.MainPage.movies,
        totalPages: state.MainPage.totalPages,
        currentPage: state.MainPage.currentPage,
        years: state.MainPage.years
    }
}

export default connect(mapStatetoProps,
    { addGenre: addGenreAC, addYear: addYearAC, addMovies: getMoviesThunk, addPopular: addPopularAC, getNeewMoviesPage: changePageThunk, getNewSearchMovies: searchMoviesThunk })
    (FilterContainer);
