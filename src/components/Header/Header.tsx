import React, { useState, FC } from "react";

import logo from "../../img/logo.png";
import eye from "../../img/eye.png";

import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import header from "./Header.module.css";
import SearchContainer from "../Main/Search/SearchContainer";

type HeaderType = {}

const Header: FC<HeaderType> = () => {
    let [isTrue, setIsTrue] = useState(false);
    let location = useLocation();

    const changeMenuIcon = () => {
        setIsTrue(true);
    }

    const changeMenuIconFalse = () => {
        setIsTrue(false);
    }

    return (
        <>
            <header className={header.headerWrapper}>
                <NavLink to="/">
                    <div className={header.logo}>
                        <img
                            src={logo}
                            alt={logo.toString()}
                        />
                        <span className={header.logo_title}>MovieFire</span>
                    </div>
                </NavLink>

                <div className={header.link_wrapper}>
                    <NavLink to="/movie">Фильмы</NavLink>
                    <NavLink className={header.link} to="/profile/all-movies">Избранное</NavLink>
                    {location.pathname === "/movie" ? <SearchContainer /> : null}
                </div>


                <div className={header.mob_header} >
                    {isTrue ?
                        <>
                            <img
                                className={header.icon_active}
                                onClick={changeMenuIconFalse}
                                src={eye}
                                alt=""
                            />
                            <div className={header.back_active}>
                                <div className={header.menu}>
                                    <NavLink className={header.menu_link} to="/movie">Фильмы</NavLink>
                                    <NavLink className={header.menu_link} to="/profile/all-movies">Избранное</NavLink>
                                    {location.pathname === "/movie" ? <div className={header.search_wrapper}><SearchContainer /></div> : null}
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className={header.icon} onClick={changeMenuIcon}>Menu</div>
                            <div className={header.back}></div>
                        </>
                    }
                </div>
            </header>
        </>
    )
}

export default Header;