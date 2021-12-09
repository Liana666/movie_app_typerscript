import React from "react";
import { PaginationType } from "../../types/type";

import paginator from "./Pagination.module.css";


const Pagination: React.FC<PaginationType> = ({
    getNeewMoviesPage,
    moviesName,
    currentPage,
    genre,
    year
}) => {

    const onChangePage = () => {
        getNeewMoviesPage(moviesName, currentPage + 1, genre, year);
    }

    return (
        <div className={paginator.wrapper}>
            <div className={paginator.btn} onClick={onChangePage}>Загрузить еще</div>
        </div>
    )
}


export default Pagination;