import { connect } from "react-redux";
import { IngAddSelector } from "../../../redux/selectors/selectors";
import Movies from "./Movies";

let mapStateToProps = (state) => {
    return {
        favoriteMovies: state.ProfilePage.favoriteMovies,
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
    }
}

const MoviesContainer = connect(mapStateToProps)(Movies);

export default MoviesContainer;