import { combineReducers, createStore } from "redux";
import reducerContent from "./content-page-reducer";
import reducerMessage from "./message-page-reducer";
import reducerAsidePage from "./aside-page-reducer";
import reducerUsers from "./users-page-reducer";

let reducers = combineReducers({
  contentPage: reducerContent,
  dialogPage: reducerMessage,
  asidePage: reducerAsidePage,
  userPage: reducerUsers,
});
let store = createStore(reducers);
window.store = store;

export default store;
