import React, { useEffect, FC } from "react";
import { connect, useDispatch } from "react-redux";

import { getPopularThunk, changePagePopularThunk, chandePopularAC } from "../../../redux/reducers/mainReducer";

import { MovieType } from "../../../types/type";
import { AppStateType } from "../../../redux/store";

import Popular from "./Popular";
import { compose } from "redux";

type PropsType = MapDispatchPropsType & MapStatePropsType;

const PopularContainer: FC<PropsType> = ({
    popular,
    genre,
    year,
    moviesName,
    totalPages,
    changePage,
    currentPagePopular,
    addPopular,
}) => {

    useEffect(() => { //Получаем популярные фильмы (должен отрендерится всего один разБ поэтому не указываем зависимостей)
        addPopular();
    }, [])


    return (
        <>
            <Popular
                popular={popular}
                genre={genre}
                year={year}
                moviesName={moviesName}
                totalPages={totalPages}
                changePage={changePage}
                currentPagePopular={currentPagePopular}
            />
        </>
    )
}

type MapStatePropsType = {
    popular: Array<MovieType>
    genre: number
    year: number
    moviesName: string
    totalPages: number
    currentPagePopular: number
}

type MapDispatchPropsType = {
    addPopular: () => void
    changePage: (page: number) => void
}

const mapStatetoProps = (state: AppStateType): MapStatePropsType => {
    return {
        popular: state.MainPage.popular,
        genre: state.MainPage.genre,
        year: state.MainPage.year,
        moviesName: state.MainPage.moviesName,
        currentPagePopular: state.MainPage.currentPagePopular,
        totalPages: state.MainPage.totalPages
    }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStatetoProps,
    { addPopular: getPopularThunk, changePage: changePagePopularThunk }))
    (PopularContainer);