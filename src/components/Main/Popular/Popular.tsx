import React, { FC } from "react";

import popularcss from "./Popular.module.css";

import MovieCardContainer from "../../../common/MovieCard/MovieCardContainer";
import { MovieProp, PopularType } from "../../../types/type";

const Popular: FC<PopularType> = ({
    changePage,
    currentPagePopular,
    popular,
    moviesName,
    genre,
    year,
    totalPages
}) => {

    const changeCurrentPage = () => {
        changePage(currentPagePopular + 1);
    }

    return (
        <>
            {genre === 0 && year === 0 && moviesName === '' ?
                <>
                    <div className="container_grid">
                        {popular.map((m: MovieProp) => {
                            return <MovieCardContainer {...m} />
                        })}
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