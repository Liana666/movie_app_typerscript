import React from "react";

import logo from "../../img/logo.png";
import loop from "../../img/lupa.png";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import header from "./Header.module.css";



const Header = () => {
    return (
        <HeaderWrapper>
            <div className={header.logo}>
                <img src={logo} alt={logo.toString()} />
                <span className={header.logo_title}>MovieFire</span>
            </div>

            <div className={header.link_wrapper}>
                <NavLink to="/main">Фильмы</NavLink>
                <NavLink className={header.link} to="/profile">Избранное</NavLink>
                <input className={header.input} placeholder="поиск..." type="text" />
                <img className={header.loop} src={loop} alt="" />
            </div>
        </HeaderWrapper >
    )
}


const HeaderWrapper = styled.header`
    padding: 15px 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

`


export default Header;