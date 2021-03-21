import { combineReducers, createStore } from "redux";
import reducerPost from "./post-page-reducer";
import reducerMessage from "./message-page-reducer";
import reducerAsidePage from "./aside-page-reducer";

let reducers = combineReducers({
  postPage: reducerPost,
  messagePage: reducerMessage,
  asidePage: reducerAsidePage,
});
let store = createStore(reducers);

export default store;
