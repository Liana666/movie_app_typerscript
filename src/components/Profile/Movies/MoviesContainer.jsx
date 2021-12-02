import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { IngAddSelector } from "../../../redux/selectors/selectors";
import Movies from "./Movies";

const MoviesContainer = ({ viewed, favoriteMovies, assessed }) => {

    const [viewedMovies, setViewedMovies] = useState([]);
    const [assessedMovies, setAssessedMovies] = useState([]);

    useEffect(() => {
        if (viewed.length > 0 && favoriteMovies.length > 0) {
            let viewedMovies = viewed.filter(v => favoriteMovies.includes(v));
            setViewedMovies(viewedMovies);
        }
    }, [viewed]);

    useEffect(() => {
        if (assessed.length > 0 && favoriteMovies.length > 0) {
            let assessedMovies = assessed.filter(a => favoriteMovies.includes(a));
            setAssessedMovies(assessedMovies);
        }
    }, [assessed]);

    return (
        <Movies
            viewed={viewed}
            favoriteMovies={favoriteMovies}
            assessed={assessed}
            viewedMovies={viewedMovies}
            assessedMovies={assessedMovies}
        />
    )
}


let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
    }
}


export default connect(mapStateToProps)(MoviesContainer);