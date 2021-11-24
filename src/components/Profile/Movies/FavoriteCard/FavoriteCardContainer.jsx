import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { IngAddSelector } from "../../../../redux/selectors/selectors";

import { addViewedThunk, addRatedThunk } from "../../../../redux/reducers/profileReducer";

const FavoriteCardContainer = (props) => {
   return <FavoriteCard
      viewed={props.viewed}
      addViewed={props.addViewed}
      movie={props.movie}
      vote={props.vote}
      addRated={props.addRated}
      rated={props.rated}
      assessed={props.assessed}
      currentVote={props.currentVote}
   />
}

const mapStatetoProps = (state) => {
   return {
      vote: state.ProfilePage.vote,
      viewed: state.ProfilePage.viewed,
      rated: state.ProfilePage.rated,
      assessed: IngAddSelector(state),
   }
}
export default connect(mapStatetoProps,
   { addViewed: addViewedThunk, addRated: addRatedThunk })
   (FavoriteCardContainer);