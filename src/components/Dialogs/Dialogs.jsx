import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Messages";
import NewMessageContainer from "./NewMessage/newMessageContainer";

const Dialogs = (props) => {
  let dialogsElements = props.data.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = props.data.messages.map((m) => (
    <Message id={m.id} key={m.id} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <NewMessageContainer />
      </div>
    </div>
  );
};

export default Dialogs;
