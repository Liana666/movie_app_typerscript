import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard";

import { getGenres } from "../../../api/api";
import { withRouter } from "react-router";


const MovieCardContainer = (props) => {
    const [genres, setGenres] = useState([]);
    const imgSrc = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        getGenres()
            .then(response => {
                let genres = response.data.genres;
                setGenres(genres);
            });
    }, [setGenres]);

    return (
        <>
            <MovieCard
                title={props.title}
                overview={props.overview}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
                genre_ids={props.genre_ids}
                adult={props.adult}
                id={props.id}
                genres={genres}
                backdrop_path={props.backdrop_path}
            />
        </>
    )
}


// const mapStatetoProps = (state) => {
//     return {
//         genres: state.MainPage.genres,
//     }
// }

// // const mapDispatchtoProps = (dispatch) => {
// //     return {
// //         addGenre: (genre) => {
// //             dispatch(addGenreAC(genre));
// //         },


// //         addMovies: (movies) => {
// //             dispatch(addMoviesAC(movies));
// //         },

// //         addPopular: (popular) => {
// //             dispatch(addPopularAC(popular));
// //         },

// //         getGenres: getGenresThunk

// //     }
// // }



export default MovieCardContainer;
