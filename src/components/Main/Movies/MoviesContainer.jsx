import React, { useEffect, useState } from "react";
import { getMovies } from "../../../api/api";

import Movies from "./Movies";

const MoviesContainer = (props) => {
   const [isLoaded, setisLoaded] = useState(false);
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      getMovies()
         .then(response => {
            setMovies(response.data.results);
            setisLoaded(true);
         });

   })
   // .catch(error => console.error('Error', error));


   return (
      <>
         {isLoaded ? <Movies movies={movies} /> : 'загрузка...'}

      </>
   )
}


export default MoviesContainer;