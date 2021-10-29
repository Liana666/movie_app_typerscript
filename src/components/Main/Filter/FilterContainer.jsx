import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import addGenreAC from "../../../redux/reducers/mainReducer";

import Filter from "./Filter";

const mapStatetoProps = (state) => {
    return { genre: state.MainPage.genre }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addGenre: (genre) => {
            dispatch(addGenreAC(genre));
        }

    }
}


const FilterContainer = connect(mapStatetoProps, mapDispatchtoProps)(Filter);

export default FilterContainer;