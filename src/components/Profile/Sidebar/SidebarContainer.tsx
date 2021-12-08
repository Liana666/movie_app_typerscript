import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { IngAddSelector } from "../../../redux/selectors/selectors";
import { AppStateType } from "../../../redux/store";

type MapStatePropsType = {
    viewed: Array<string>
    assessed: Array<string>
    favoriteMovies: Array<string>
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;