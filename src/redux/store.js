import { combineReducers, createStore } from "redux";
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import profileReducer from "./reducers/profileReducer";
import searchReducer from "./reducers/searchReducer";
import paginationReducer from "./reducers/paginationReducer";

let reducers = combineReducers({
   HeaderPage: headerReducer,
   SearchPage: searchReducer,
   //PaginationPage: paginationReducer
   // MainPage: mainReducer
   // ProfilePage: profileReducer
})

let store = createStore(reducers);


export default store;