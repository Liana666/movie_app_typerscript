import React from "react";

import logo from "../../img/logo.png";

import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import styled from "styled-components";
import header from "./Header.module.css";

import SearchContainer from "../Main/Search/SearchContainer";

const Header = () => {
    let location = useLocation()
    console.log(location);

    return (
        <>
            <HeaderWrapper>
                <NavLink to="/">
                    <div className={header.logo}>
                        <img src={logo} alt={logo.toString()} />
                        <span className={header.logo_title}>MovieFire</span>
                    </div>
                </NavLink>

                <div className={header.link_wrapper}>
                    <NavLink to="/movie">Фильмы</NavLink>
                    <NavLink className={header.link} to="/profile/all-movies">Избранное</NavLink>
                    {location.pathname === "/movie" ? <SearchContainer /> : null}
                </div>
            </HeaderWrapper>
        </>
    )
}


const HeaderWrapper = styled.header`
    padding: 15px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`
export default Header;