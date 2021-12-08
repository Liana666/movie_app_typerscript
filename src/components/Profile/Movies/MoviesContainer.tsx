import React, { FC } from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { IngAddSelector } from "../../../redux/selectors/selectors";
import { AppStateType } from "../../../redux/store";
import { RatedType } from "../../../types/type";
import Movies from "./Movies";

const MoviesContainer: FC<MapStatePropsType> = ({
    viewed,
    favoriteMovies,
    assessed,
    rated
}) => {

    console.log(rated)

    const [viewedMovies, setViewedMovies] = useState<number[]>([]);
    const [assessedMovies, setAssessedMovies] = useState<string[]>([]);

    useEffect(() => {
        if (viewed.length > 0 && favoriteMovies.length > 0) {
            let viewedMovies = viewed.filter((v: any) => favoriteMovies.includes(v));
            setViewedMovies(viewedMovies);
        }
    }, []);

    useEffect(() => {
        if (assessed.length > 0 && favoriteMovies.length > 0) {
            let assessedMovies = assessed.filter(a => favoriteMovies.includes(a));
            setAssessedMovies(assessedMovies);
        }
    }, []);

    return (
        <Movies
            favoriteMovies={favoriteMovies}
            viewedMovies={viewedMovies}
            assessedMovies={assessedMovies}
        />
    )
}

type MapStatePropsType = {
    favoriteMovies: Array<string>
    viewed: Array<number>
    assessed: Array<string>
    rated: Array<RatedType>
}


let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
        rated: state.ProfilePage.rated
    }
}


export default compose<React.ComponentType>(connect<MapStatePropsType, null, null, AppStateType>(mapStateToProps))
    (MoviesContainer);