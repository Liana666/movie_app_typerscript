import { createSelector } from "reselect";


export const VoteAdd = (state) => {
    return state.ProfilePage.rated;
}

export const VoteAddSelector = createSelector(VoteAdd, (rated) => {
    return rated.map(rate => rate.vote);
})

export const IngAddSelector = createSelector(VoteAdd, (rated) => {
    return rated.map(rate => rate.img);
})