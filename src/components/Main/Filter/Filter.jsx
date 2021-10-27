import React from "react";

import styled from "styled-components";
import filter from "./Filter.module.css";

const Filter = (props) => {
    return (
        <>
            <FilterWrapper>
                <select style={{ marginLeft: 0 }} className={filter.select} name="genres" id="">
                    <option value="">Комедия</option>
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