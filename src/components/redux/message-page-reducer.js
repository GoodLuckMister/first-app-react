const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const initialState = {
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
};

const updateMessagePage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      return state;
  }
  return state;
};
export const actionAddMessage = () => ({
  type: ADD_MESSAGE,
});
export const actionUpdateNewMessage = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export default updateMessagePage;
