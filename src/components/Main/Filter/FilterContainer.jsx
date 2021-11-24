import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeGenreThunk, changeYearThunk } from "../../../redux/reducers/mainReducer";
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
                genres={genres}
                genre={props.genre}
                years={props.years}
                year={props.year}
                movies={props.movies}
                currentPage={props.currentPage}
                totalPages={props.totalPages}
                changeGenre={props.changeGenre}
                changeYear={props.changeYear}
            />
        </>
    )
}


const mapStatetoProps = (state) => {
    return {
        genre: state.MainPage.genre,
        movies: state.MainPage.movies,
        totalPages: state.MainPage.totalPages,
        currentPage: state.MainPage.currentPage,
        years: state.MainPage.years,
        year: state.MainPage.year
    }
}

export default connect(mapStatetoProps,
    { changeYear: changeYearThunk, changeGenre: changeGenreThunk })
    (FilterContainer);
