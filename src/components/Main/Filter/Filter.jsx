import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { getGenres } from "../../../api/api";

import styled from "styled-components";
import filter from "./Filter.module.css";


const Filter = (props) => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        getGenres()
            .then(response => {
                setGenres(response.data.genres);
            });
    })


    return (
        <>
            <FilterWrapper>
                <select style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option className={filter.option}>Все жанры</option>
                    {genres.map(g => <option className={filter.option} value={g.name}>{g.name}</option>
                    )}
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">2020г.</option>
                </select>
                <select className={filter.select} name="genres" id="">
                    <option value="year">Япония</option>
                </select>
            </FilterWrapper>
        </>
    )
}

const FilterWrapper = styled.div`
    margin: 7px 0 30px 0;
    display: flex;
    align-items: center;
`

export default Filter;