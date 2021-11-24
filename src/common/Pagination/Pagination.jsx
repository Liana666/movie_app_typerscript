import React from "react";

import paginator from "./Pagination.module.css";


const Pagination = (props) => {

    const onChangePage = () => {
        props.getNeewMoviesPage(props.moviesName, props.currentPage + 1, props.genre, props.year, props.popular);
    }

    return (
        <div className={paginator.wrapper}>
            <div className={paginator.btn} onClick={onChangePage}>Загрузить еще</div>
        </div>
    )
}


export default Pagination;