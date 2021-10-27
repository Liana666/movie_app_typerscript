import React from "react";
import FilterContainer from "../Main/Filter/FilterContainer";
import MoviesContainer from "./Movies/MoviesContainer";

const Main = () => {
    return (
        <div>
            <FilterContainer />
            <MoviesContainer />
        </div>
    )
}

export default Main;