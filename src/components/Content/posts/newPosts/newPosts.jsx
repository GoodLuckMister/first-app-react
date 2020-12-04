import React, {} from 'react';
import s from './newPosts.module.css';

const NewPosts = () => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={s.NewPosts}>
            <div className={s.title}>New post</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost} className={s.button}>send</button>
        </div>

    )

}

export default NewPosts;