import { applyMiddleware, combineReducers, createStore } from "redux";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import headerReducer from "./reducers/headerReducer";
import mainReducer from "./reducers/mainReducer";
import profileReducer from "./reducers/profileReducer";
import searchReducer from "./reducers/searchReducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

let reducers = combineReducers({
   HeaderPage: headerReducer,
   SearchPage: searchReducer,
   MainPage: mainReducer
   // ProfilePage: profileReducer
})

let store = createStore(reducers, composedEnhancer);


export default store;