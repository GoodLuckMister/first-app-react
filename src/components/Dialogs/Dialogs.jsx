import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

};
const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kolya'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Tolik'},
        {id: 5, name: 'Sasha'},
        {id: 6, name: 'Roma'}
    ]
    let dialogsElements = dialogs.map(d =>
        <DialogItem name={d.name} id={d.id}/>
    );
    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'I coming you'},
        {id: 3, message: 'Babe got me'},
        {id: 4, message: 'You actor man'}
    ]

    let messagesElements = messages.map(m =>
        <Message id={m.id} message={m.message} />
    );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>


    )
};

export default Dialogs;
