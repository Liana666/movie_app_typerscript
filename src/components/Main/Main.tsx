import React, { FC } from "react";

import PopularContainer from "./Popular/PopularContainer";
import FilterContainer from "./Filter/FilterContainer";

import styled from "styled-components";

type MainType = {}

const Main: FC<MainType> = () => {
    return (
        <MainWrapper data-testid="movie-page">
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