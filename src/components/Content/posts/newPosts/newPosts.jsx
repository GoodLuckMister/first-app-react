import React, { } from 'react';
import s from './newPosts.module.css';

const NewPosts = () => {
    return  (
        <div className={s.NewPosts}>
            <div className={s.title}>New post</div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button className={s.button}>send</button>
            </div>
        
    )
        
}

export default NewPosts;