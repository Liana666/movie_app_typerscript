import React from "react";

import PopularContainer from "./Popular/PopularContainer.jsx";
import FilterContainer from "./Filter/FilterContainer";

import styled from "styled-components";


const Main = () => {
    return (
        <MainWrapper>
            <FilterContainer />
            <PopularContainer />
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`

export default Main;