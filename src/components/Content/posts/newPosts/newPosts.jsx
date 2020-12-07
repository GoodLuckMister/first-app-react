import React, {} from 'react';
import s from './newPosts.module.css';

const NewPosts = (props) => {
    let newPostElement = React.createRef();
    let addPosts = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
    };
    return (
        <div className={s.NewPosts}>
            <div className={s.title}>New post</div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPosts} className={s.button}>send</button>
        </div>

    )

}

export default NewPosts;