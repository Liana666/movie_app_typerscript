import React, { useEffect, useState } from "react";
import { getMovies } from "../../../api/api";

import Filter from "./Filter";

const FilterContainer = (props) => {
    const [isLoaded, setisLoaded] = useState(false);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
            .then(response => {
                setMovies(response.data.results);
            });
        setisLoaded(true);
    })
    // .catch(error => console.error('Error', error));


    return (
        <>
            {isLoaded ? <Filter movies={movies} /> : null}

        </>
    )
}


export default FilterContainer;