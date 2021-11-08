import React from "react";

import styled from "styled-components";
import single from "./SingleMovie.module.css";

const SingleMovie = (props) => {

    const imgSrc = 'https://image.tmdb.org/t/p/original/';

    return (
        <BackgroundMovie>
            <img className={single.background} src={imgSrc + props.back} />
            {props.title}
        </BackgroundMovie>
    )
}

const BackgroundMovie = styled.div`
    position: relative; 
    overflow: hidden;
    width: 100%;
    height: 700px;
`

export default SingleMovie;