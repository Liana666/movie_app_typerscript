import { combineReducers, createStore } from "redux";
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
   HeaderPage: headerReducer
   // MainPage: mainReducer,
   // ProfilePage: profileReducer
})

let store = createStore(reducers);


export default store;