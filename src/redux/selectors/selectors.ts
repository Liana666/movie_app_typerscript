import { createSelector } from "reselect";
import { AppStateType } from "../store";

export const VoteAdd = (state: AppStateType) => {
    return state.ProfilePage.rated;
}

export const VoteAddSelector = createSelector(VoteAdd, (rated) => {
    return rated.map(rate => rate.vote);
})

export const IngAddSelector = createSelector(VoteAdd, (rated) => {
    return rated.map(rate => rate.img);
})