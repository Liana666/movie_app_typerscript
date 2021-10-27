import React from "react";
import * as axios from "axios";
import { createRef, useState } from 'react';

import logo from "../../img/logo.png";

import { NavLink } from "react-router-dom";

import styled from "styled-components";
import header from "./Header.module.css";

import SearchContainer from "../Search/SearchContainer";

const Header = (props) => {

    return (
        <>

            <HeaderWrapper>
                <div className={header.logo}>
                    <img src={logo} alt={logo.toString()} />
                    <span className={header.logo_title}>MovieFire</span>
                </div>

                <div className={header.link_wrapper}>
                    <NavLink to="/">Фильмы</NavLink>
                    <NavLink className={header.link} to="/profile">Избранное</NavLink>
                    <NavLink className={header.link} to="/search">Поиск</NavLink>

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