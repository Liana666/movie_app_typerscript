
import { connect } from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) => {
    return {
        viewed: state.ProfilePage.viewed,
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;