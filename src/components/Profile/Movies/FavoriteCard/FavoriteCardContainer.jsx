import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { VoteAddSelector, IngAddSelector } from "../../../../redux/selectors/selectors";

import { addViewedThunk, addRatedThunk, addClassThunk } from "../../../../redux/reducers/profileReducer";

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
      addClass={props.addClass}
      currentClass={props.currentClass}
   />
}

const mapStatetoProps = (state) => {
   return {
      currentVote: VoteAddSelector(state),
      vote: state.ProfilePage.vote,
      viewed: state.ProfilePage.viewed,
      rated: state.ProfilePage.rated,
      assessed: IngAddSelector(state),
      currentClass: state.ProfilePage.currentClass,
   }
}
export default connect(mapStatetoProps, { addViewed: addViewedThunk, addRated: addRatedThunk, addClass: addClassThunk })(FavoriteCardContainer);