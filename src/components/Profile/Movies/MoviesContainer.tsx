import React, { FC } from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { IngAddSelector } from "../../../redux/selectors/selectors";
import { AppStateType } from "../../../redux/store";
import Movies from "./Movies";

const MoviesContainer: FC<MapStatePropsType> = ({ viewed, favoriteMovies, assessed }) => {

    const [viewedMovies, setViewedMovies] = useState<any>([]);
    const [assessedMovies, setAssessedMovies] = useState<any>([]);

    useEffect(() => {
        if (viewed.length > 0 && favoriteMovies.length > 0) {
            let viewedMovies = viewed.filter(v => favoriteMovies.includes(v));
            setViewedMovies(viewedMovies);
        }
    }, [viewed]);

    console.log(viewed)

    useEffect(() => {
        if (assessed.length > 0 && favoriteMovies.length > 0) {
            let assessedMovies = assessed.filter(a => favoriteMovies.includes(a));
            setAssessedMovies(assessedMovies);
        }
    }, [assessed]);

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
    viewed: Array<any>
    assessed: Array<any>
}


let mapStateToProps = (state: AppStateType) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
    }
}


export default compose<React.ComponentType>(connect<MapStatePropsType, null, null, AppStateType>(mapStateToProps))
    (MoviesContainer);