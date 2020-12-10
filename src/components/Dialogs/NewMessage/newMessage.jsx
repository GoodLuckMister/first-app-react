import React, {} from 'react';
import s from './../Dialogs.module.css';

const NewMessage = (props) => {

    let newMessageElement = React.createRef();
    let addMessages = () => {
        props.addMessage();

    }
    let onMessageChange = () => {

        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);

    };
    return (
        <div className={s.newMessages}>

            <textarea  onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
            <button onClick={addMessages} className={s.button}>send</button>
        </div>

    )

}

export default NewMessage;