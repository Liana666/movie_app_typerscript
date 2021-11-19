import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { addViewedThunk, addRatedThunk } from "../../../../redux/reducers/profileReducer";

const FavoriteCardContainer = (props) => {


   return <FavoriteCard
      viewed={props.viewed}
      addViewed={props.addViewed}
      movie={props.movie}
      favoriteMovies={props.favoriteMovies}
      vote={props.vote}
      addRated={props.addRated}
   />
}

const mapStatetoProps = (state) => {
   return {
      vote: state.ProfilePage.vote,
      viewed: state.ProfilePage.viewed,
      favoriteMovies: state.ProfilePage.favoriteMovies
   }
}
export default connect(mapStatetoProps, { addViewed: addViewedThunk, addRated: addRatedThunk })(FavoriteCardContainer);