import React from "react";

import paginator from "./Pagination.module.css";


const Pagination = ({ getNeewMoviesPage, moviesName, currentPage, genre, year, popular }) => {

    const onChangePage = () => {
        getNeewMoviesPage(moviesName, currentPage + 1, genre, year, popular);
    }

    return (
        <div className={paginator.wrapper}>
            <div className={paginator.btn} onClick={onChangePage}>Загрузить еще</div>
        </div>
    )
}


export default Pagination;