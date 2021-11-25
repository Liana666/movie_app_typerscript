import React, { useState } from "react";

import logo from "../../img/logo.png";
import eye from "../../img/eye.png";

import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import styled from "styled-components";
import header from "./Header.module.css";

import SearchContainer from "../Main/Search/SearchContainer";

const Header = () => {
    let [isTrue, setIsTrue] = useState(false);
    let location = useLocation();

    const changeMenuIcon = () => {
        setIsTrue(true);
    }

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


                <div className={header.mob_header}>
                    <div className={header.burger} onclick={changeMenuIcon}>
                        {isTrue ? <img className={header.burger_active} src={eye} />
                            : <>
                                <div></div>
                                <div></div>
                                <div></div>
                            </>
                        }
                    </div>
                    <div className={isTrue ? header.link_wrapper2_active : header.link_wrapper2}>
                        <NavLink to="/movie">Фильмы</NavLink>
                        <NavLink className={header.link} to="/profile/all-movies">Избранное</NavLink>
                        <div>
                            {location.pathname === "/movie" ? <SearchContainer /> : null}
                        </div>

                    </div>
                </div>
            </HeaderWrapper>
        </>
    )
}


const HeaderWrapper = styled.header`
    position: relative;
    padding: 15px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

`
export default Header;