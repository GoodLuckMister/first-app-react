import React from "react";
import StateContext from "../../../contextState";
import {
  actionAddMessage,
  actionUpdateNewMessage,
} from "../../redux/message-page-reducer";
import NewMessage from "./newMessage";

const NewMessageContainer = () => {
  return (
    <StateContext.Consumer>
      {(store) => {
        let addMessages = () => {
          store.dispatch(actionAddMessage());
        };
        let onMessageChange = (text) => {
          store.dispatch(actionUpdateNewMessage(text));
        };

        return (
          <NewMessage
            createMessage={addMessages}
            changeMessage={onMessageChange}
            newMessageText={store.getState().dialogPage.newMessageText}
          />
        );
      }}
    </StateContext.Consumer>
  );
};

export default NewMessageContainer;
