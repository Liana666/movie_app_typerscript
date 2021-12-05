import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import singleReducer from "./reducers/singleReducer";
import profileReducer from "./reducers/profileReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

let reducers = combineReducers({
   HeaderPage: headerReducer,
   MainPage: mainReducer,
   SinglePage: singleReducer,
   ProfilePage: profileReducer
})

type Reducers = typeof reducers;
export type AppStateType = ReturnType<Reducers>;

const store = createStore(reducers, composedEnhancer);


export default store;