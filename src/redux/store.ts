import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import profileReducer from "./reducers/profileReducer";
import singleReducer from "./reducers/singleReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

let reducers = combineReducers({
   HeaderPage: headerReducer,
   MainPage: mainReducer,
   SinglePage: singleReducer,
   ProfilePage: profileReducer
})

type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

let store = createStore(reducers, composedEnhancer);


export default store;