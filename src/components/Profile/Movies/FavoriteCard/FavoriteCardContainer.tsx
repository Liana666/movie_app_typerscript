import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { IngAddSelector } from "../../../../redux/selectors/selectors";

import { addViewedThunk, addRatedThunk } from "../../../../redux/reducers/profileReducer";
import { RatedType } from "../../../../types/type";
import { AppStateType } from "../../../../redux/store";
import { compose } from "redux";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps;

const FavoriteCardContainer = (props: PropsType) => {

   const {
      viewed,
      addViewed,
      voteArray,
      addRated,
      rated,
      assessed,
      children
   } = props

   console.log(children)


   return <FavoriteCard
      viewed={viewed}
      addViewed={addViewed}
      voteArray={voteArray}
      addRated={addRated}
      rated={rated}
      assessed={assessed}
      movie={children}
   />
}

type OwnProps = {
   children: string
}

type MapStatePropsType = {
   voteArray: Array<number>
   viewed: Array<string>
   rated: Array<RatedType>
   assessed: Array<string>
}

type MapDispatchPropsType = {
   addViewed: (currentViewed: string) => void
   addRated: (currentRated: RatedType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      voteArray: state.ProfilePage.voteArray,
      viewed: state.ProfilePage.viewed,
      rated: state.ProfilePage.rated,
      assessed: IngAddSelector(state),
   }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, OwnProps, AppStateType>(mapStateToProps,
   { addViewed: addViewedThunk, addRated: addRatedThunk }))
   (FavoriteCardContainer);