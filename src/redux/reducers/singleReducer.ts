import { getCast } from "../../api/api";

type ActorsType = {
    name: string
    id: number
    profile_path: string
    character: string
}

type CrewType = {
    id: number
    job: string
    name: string
}

type initialStateType = {
    actors: Array<ActorsType>
    crew: Array<CrewType>
}

let initialState: initialStateType = {
    actors: [],
    crew: []
}

const singleReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case "GET_ACTORS":
            return { ...state, actors: action.actors }

        case "GET_CREW":
            return { ...state, crew: action.crew }

        default:
            return state;

    }
}

export const getActorsAC = (actors: Array<ActorsType>) => ({ type: "GET_ACTORS", actors });
export const getCrewAC = (crew: Array<CrewType>) => ({ type: "GET_CREW", crew });

export const addActorsWithCrewThunk = (id: number) => async (dispatch: any) => {
    getCast(id)
        .then((response: any) => {
            dispatch(getActorsAC(response.data.cast));
            dispatch(getCrewAC(response.data.crew));
        });
}

export default singleReducer;