import React from "react";
import {
  actionAddMessage,
  actionUpdateNewMessage,
} from "../../redux/message-page-reducer";
import NewMessage from "./newMessage";

const NewMessageContainer = (props) => {
  debugger;
  let addMessages = () => {
    props.dispatch(actionAddMessage());
  };
  let onMessageChange = (text) => {
    props.dispatch(actionUpdateNewMessage(text));
  };
  return (
    <NewMessage
      createMessage={addMessages}
      changeMessage={onMessageChange}
      newMessageText={props.newMessageText}
    />
  );
};

export default NewMessageContainer;
