import React from "react";

import FilterContainer from "../Main/Filter/FilterContainer";
import PopularContainer from "../Main/Popular/PopularContainer.jsx";

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