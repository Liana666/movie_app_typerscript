
import { connect } from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        viewed: state.ProfilePage.viewed,
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}

let mapDispatcToProps = (dispatch) => {

}

const SidebarContainer = connect(mapStateToProps, mapDispatcToProps)(Sidebar);

export default SidebarContainer;