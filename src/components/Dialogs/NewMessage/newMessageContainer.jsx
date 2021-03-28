import React from "react";
import { connect } from "react-redux";
import {
  actionAddMessage,
  actionUpdateNewMessage,
} from "../../redux/message-page-reducer";
import NewMessage from "./newMessage";

const getStateToProps = (state) => {
  return {
    newMessageText: state.dialogPage.newMessageText,
  };
};
const getDispatchToProps = (dispatch) => {
  return {
    createMessage: () => {
      dispatch(actionAddMessage());
    },
    changeMessage: (text) => {
      dispatch(actionUpdateNewMessage(text));
    },
  };
};

const NewMessageContainer = connect(
  getStateToProps,
  getDispatchToProps
)(NewMessage);

export default NewMessageContainer;
