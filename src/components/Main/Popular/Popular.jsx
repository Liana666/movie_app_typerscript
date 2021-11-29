import React from "react";

import popular from "./Popular.module.css";

import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";

const Popular = (props) => {

    const changePage = () => {
        props.changePage(props.currentPagePopular + 1);
    }

    return (
        <>
            {
                props.genre === 0 && props.year === 0 && props.moviesName === '' ?
                    <>
                        <div className="container_grid">
                            {props.popular.map(m => <MovieCardContainer
                                key={m.id}
                                title={m.title}
                                overview={m.overview}
                                poster_path={m.poster_path}
                                release_date={m.release_date}
                                vote_average={m.vote_average}
                                genre_ids={m.genre_ids}
                                adult={m.adult}
                                backdrop_path={m.backdrop_path}
                                id={m.id}
                            />)}
                        </div>

                        {props.currentPagePopular < props.totalPages ?
                            <div className={popular.wrapper}>
                                <div className={popular.btn} onClick={changePage}>Загрузить еще</div>
                            </div>

                            : null
                        }
                    </>
                    : null
            }
        </>
    )
}

export default Popular;