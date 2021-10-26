import React from "react";
import { createRef, useState } from 'react';

import logo from "../../img/logo.png";
import loop from "../../img/lupa.png";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import header from "./Header.module.css";
import { searchMovies } from "../../api/api";

import MovieCard from "../Main/MovieCard/MovieCard";



const Header = (props) => {

    let newsPostElement = React.createRef();
    const [newMovies, setNewMovies] = useState([]);

    const searchMovie = () => {
        let nameMovies = newsPostElement.current.value;
        props.searchMovie(nameMovies);

    }

    const addNewMovies = (props) => {
        let name = props.moviesName;
        searchMovies(name)
            .then(response => {
                return setNewMovies(response.result);

            });
    }


    return (
        <>
            {
                newMovies.map(m => <MovieCard
                    key={m.id}
                    title={m.title}
                    overview={m.overview}
                    poster_path={m.poster_path}
                    release_date={m.release_date}
                    vote_average={m.vote_average}
                    genre_ids={m.genre_ids}
                    adult={m.adult}

                />)
            }

            <HeaderWrapper>
                <div className={header.logo}>
                    <img src={logo} alt={logo.toString()} />
                    <span className={header.logo_title}>MovieFire</span>
                </div>

                <div className={header.link_wrapper}>
                    <NavLink to="/">Фильмы</NavLink>
                    <NavLink className={header.link} to="/profile">Избранное</NavLink>
                    <input onChange={searchMovie} className={header.input} ref={newsPostElement} placeholder="поиск..." type="text" />
                    <img onClick={addNewMovies} className={header.loop} src={loop} alt="" />
                </div>
            </HeaderWrapper >

        </>
    )
}


const HeaderWrapper = styled.header`
    padding: 15px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

`


export default Header;