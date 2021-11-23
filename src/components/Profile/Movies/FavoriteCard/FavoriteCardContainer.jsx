import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { VoteAddSelector, IngAddSelector } from "../../../../redux/selectors/selectors";

import { addViewedThunk, addRatedThunk, setIsTrueThunk, addClassThunk } from "../../../../redux/reducers/profileReducer";

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
      isTrue={props.isTrue}
      setIsTrue={props.setIsTrue}
      addClass={props.addClassThunk}
   />
}

const mapStatetoProps = (state) => {
   return {
      currentVote: VoteAddSelector(state),
      vote: state.ProfilePage.vote,
      viewed: state.ProfilePage.viewed,
      rated: state.ProfilePage.rated,
      assessed: IngAddSelector(state),
      isTrue: state.ProfilePage.isTrue
   }
}
export default connect(mapStatetoProps, { addViewed: addViewedThunk, addRated: addRatedThunk, setIsTrue: setIsTrueThunk, addClass: addClassThunk })(FavoriteCardContainer);