import { connect } from "react-redux";
import FavoriteCard from "./FavoriteCard";

import { IngAddSelector } from "../../../../redux/selectors/selectors";

import { addViewedThunk, addRatedThunk } from "../../../../redux/reducers/profileReducer";
import { MovieType, RatedType } from "../../../../types/type";
import { AppStateType } from "../../../../redux/store";
import { compose } from "redux";

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps;

const FavoriteCardContainer = (props: PropsType) => {

   const {
      favoriteMovie,
      viewedMovie,
      assessedMovie,
      movie
   } = props

   // console.log(children)


   return <FavoriteCard
      viewed={props.viewed}
      addViewed={props.addViewed}
      favoriteMovie={favoriteMovie}
      viewedMovie={viewedMovie}
      assessedMovie={assessedMovie}
      vote={props.vote}
      addRated={props.addRated}
      rated={props.rated}
      assessed={props.assessed}
      movie={movie}
   />
}

type OwnProps = {
   favoriteMovie: string
   viewedMovie: number
   assessedMovie: string
   movie: string
}

type MapStatePropsType = {
   vote: Array<number>
   viewed: Array<number>
   rated: Array<RatedType>
   assessed: Array<string>
}

type MapDispatchPropsType = {
   addViewed: (currentViewed: number) => void
   addRated: (currentRated: RatedType) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
   return {
      vote: state.ProfilePage.vote,
      viewed: state.ProfilePage.viewed,
      rated: state.ProfilePage.rated,
      assessed: IngAddSelector(state),
   }
}

export default compose<React.ComponentType>(connect<MapStatePropsType, MapDispatchPropsType, null, AppStateType>(mapStateToProps,
   { addViewed: addViewedThunk, addRated: addRatedThunk }))
   (FavoriteCardContainer);