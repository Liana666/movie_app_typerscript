import { ThunkAction } from "redux-thunk";
import { getCast } from "../../api/api";
import { ActorsType, CrewType } from "../../types/type";
import { AppStateType } from "../store";

const GET_ACTORS = "GET_ACTORS"
const GET_CREW = "GET_CREW"

type initialStateType = {
    actors: Array<ActorsType>
    crew: Array<CrewType>
}

let initialState: initialStateType = {
    actors: [],
    crew: []
}

const singleReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {

        case GET_ACTORS:
            return { ...state, actors: action.actors }

        case GET_CREW:
            return { ...state, crew: action.crew }

        default:
            return state;

    }
}

type ActionType = getActorsType | getCrewType

type getActorsType = { type: typeof GET_ACTORS, actors: Array<ActorsType> }
export const getActorsAC = (actors: Array<ActorsType>): getActorsType => ({ type: GET_ACTORS, actors });

type getCrewType = { type: typeof GET_CREW, crew: Array<CrewType> }
export const getCrewAC = (crew: Array<CrewType>): getCrewType => ({ type: GET_CREW, crew });

type ThunkPromiseType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>;

/*Add Cast*/
export const addActorsWithCrewThunk = (id: number): ThunkPromiseType => async (dispatch) => {
    getCast(id)
        .then((response) => {
            dispatch(getActorsAC(response.data.cast));
            dispatch(getCrewAC(response.data.crew));
        });
}

export default singleReducer;