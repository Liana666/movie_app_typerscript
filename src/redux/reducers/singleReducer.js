import { getCast } from "../../api/api";

let initialState = {
    actors: [],
    crew: []
}

const singleReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_ACTORS":
            return { ...state, actors: action.actors }

        case "GET_CREW":
            return { ...state, crew: action.crew }

        default:
            return state;

    }
}

export const getActorsAC = (actors) => ({ type: "GET_ACTORS", actors });
export const getCrewAC = (crew) => ({ type: "GET_CREW", crew });

export const addActorsWithCrewThunk = (id) => async dispatch => {
    getCast(id)
        .then(response => {
            dispatch(getActorsAC(response.data.cast));
            dispatch(getCrewAC(response.data.crew));
        });
}

export default singleReducer;