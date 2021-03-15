const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
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
  _addPost() {
    let newPost = {
      message: this._state.contentPage.newPostText,
      likesCount: 0,
    };
    this._state.contentPage.posts.push(newPost);
    this._state.contentPage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  _updateNewPostText(newText) {
    this._state.contentPage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  _addMessage() {
    let newMessage = {
      message: this._state.dialogPage.newMessageText,
    };
    this._state.dialogPage.messages.push(newMessage);
    this._state.dialogPage.newMessageText = "";

    this._rerenderEntireTree(this._state);
  },
  _updateNewMessageText(newTextText) {
    this._state.dialogPage.newMessageText = newTextText;
    this._rerenderEntireTree(this._state);
  },
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === ADD_MESSAGE) {
      this._addMessage();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newText);
    }
  },
};

export const actionAddPost = () => ({ type: "ADD-POST" });
export const actionUpdateNewPost = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export const actionAddMessage = () => ({
  type: "ADD-MESSAGE",
});
export const actionUpdateNewMessage = (text) => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newText: text,
});

window.store = store;

export default store;
