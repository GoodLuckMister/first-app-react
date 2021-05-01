import { combineReducers, createStore } from "redux";
import reducerContent from "./content-page-reducer";
import reducerMessage from "./message-page-reducer";
import reducerAsidePage from "./aside-page-reducer";
import reducerUsers from "./users-page-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
  contentPage: reducerContent,
  dialogPage: reducerMessage,
  asidePage: reducerAsidePage,
  userPage: reducerUsers,
  auth: authReducer,
});
let store = createStore(reducers);
window.store = store;

export default store;
