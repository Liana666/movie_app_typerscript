import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addGenreAC, addPopularAC, getMoviesThunk, changePageThunk } from "../../../redux/reducers/mainReducer";
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

    let optionSelected = '';

    const changeOption = (e) => {
        optionSelected = e.target.value;
        props.addMovies(props.currentPage, optionSelected);
    }



    return (
        <>
            <Filter
                isLoaded={props.isLoaded}
                optionSelected={optionSelected}
                getNeewMoviesPage={props.getNeewMoviesPage}
                totalPages={props.totalPages}
                currentPage={props.currentPage}
                changeOption={changeOption}
                movies={props.movies}
                addMovies={props.addMovies}
                addPopular={props.addPopular}
                genres={genres}
            />

        </>
    )
}


const mapStatetoProps = (state) => {
    return {
        genre: state.MainPage.genre,
        movies: state.MainPage.movies,
        totalPages: state.MainPage.totalPages,
        currentPage: state.MainPage.currentPage
    }
}


export default connect(mapStatetoProps,
    { addGenre: addGenreAC, addMovies: getMoviesThunk, addPopular: addPopularAC, getNeewMoviesPage: changePageThunk })
    (FilterContainer);
