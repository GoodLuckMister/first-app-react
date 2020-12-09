import React, {} from 'react';
import s from './newPosts.module.css';

const NewPosts = (props) => {
    let newPostElement = React.createRef();
    let addPosts = () => {

        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };
    return (
        <div className={s.NewPosts}>
            <div className={s.title}>New post</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
            <button onClick={addPosts} className={s.button}>send</button>
        </div>

    )

}

export default NewPosts;