import { connect } from "react-redux";
import Sidebar from "./Sidebar";
import { IngAddSelector } from "../../../redux/selectors/selectors";

let mapStateToProps = (state) => {
    return {
        viewed: state.ProfilePage.viewed,
        assessed: IngAddSelector(state),
        favoriteMovies: state.ProfilePage.favoriteMovies
    }
}


const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;