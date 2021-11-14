import React from "react";

import paginator from "./Pagination.module.css";


const Pagination = (props) => {

    const onChangePage = () => {
        props.getNeewMoviesPage(props.moviesName, props.currentPage + 1, props.genre, props.year, props.popular);
    }

    return (
        <div className={paginator.wrapper}>
            <div className={paginator.btn} onClick={onChangePage}>Загрузить еще</div>
            {/*{pages.map(p => <div className={filter.page} onClick={() => onChangePage(p)}><span className={p === props.currentPage ? filter.currentpage : null}>{p}</span></div>)}*/}
        </div>
    )
}


export default Pagination;