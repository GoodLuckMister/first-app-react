import React, { } from 'react';
import s from './Posts.module.css';


const Posts = (props) => {

    return (
        <div className={s.item}>
            <img className={s.image} src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" />
            {props.message}
            <div>
            <span>like {props.likesCount}</span>
            </div>
            
            
    </div>
    )
}

export default Posts;