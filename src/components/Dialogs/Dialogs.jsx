import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import NewMessage from "./NewMessage/newMessage";

const Dialogs = (props) => {
  console.log(props);
  debugger;
  let dialogsElements = props.dialogPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogPage.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <NewMessage
          newMessageText={props.dialogPage.newMessageText}
          dispatch={props.dispatch}
        />
      </div>
    </div>
  );
};

export default Dialogs;
