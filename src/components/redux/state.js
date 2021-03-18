import reducerPost from "./post-page-reducer";
import reducerMessage from "./message-page-reducer";

let store = {
  _state: {
    contentPage: {
      posts: [
        { message: "Hello my friend", likesCount: 15 },
        { message: "I'm fine", likesCount: 20 },
      ],
      newPostText: "hello js",
    },
    dialogPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Kolya" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Tolik" },
        { id: 5, name: "Sasha" },
        { id: 6, name: "Roma" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "I coming you" },
        { id: 3, message: "Babe got me" },
        { id: 4, message: "You actor man" },
      ],
      newMessageText: "hola hola",
    },
    asidePage: {
      asideSet: [
        { id: "/content", paragraph: "Profile" },
        { id: "/dialogs", paragraph: "Messages" },
        { id: "/news", paragraph: "News" },
        { id: "/music", paragraph: "Music" },
        { id: "/settings", paragraph: "Settings" },
      ],
    },
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    this._state.contentPage = reducerPost(this._state.contentPage, action);
    this._state.dialogPage = reducerMessage(this._state.dialogPage, action);
    this._rerenderEntireTree(this._state);
  },
};

window.store = store;

export default store;
