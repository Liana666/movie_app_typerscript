import React, { FC } from "react";

import popularcss from "./Popular.module.css";

import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";
import { PopularType } from "../../../types/type";

const Popular: FC<PopularType> = ({ changePage, currentPagePopular, popular, moviesName, genre, year, totalPages }) => {

    const changeCurrentPage = () => {
        changePage(currentPagePopular + 1);
    }

    return (
        <>
            {
                genre === 0 && year === 0 && moviesName === '' ?
                    <>
                        <div className="container_grid">
                            {popular.map(m => <MovieCardContainer
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

                        {currentPagePopular < totalPages ?
                            <div className={popularcss.wrapper}>
                                <div className={popularcss.btn} onClick={changeCurrentPage}>Загрузить еще</div>
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