import React, {} from 'react';
import s from './../Dialogs.module.css';

const NewMessage = () => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let textMessage = newMessageElement.current.value;
        alert(textMessage);
    }
    return (
        <div className={s.newMessages}>

            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage} className={s.button}>send</button>
        </div>

    )

}

export default NewMessage;