import React, { } from 'react';
import s from './Content.module.css';
import Posts from './posts/Posts';
import NewPosts from './posts/newPosts/newPosts'
import MyPosts from './posts/myPosts/MyPosts'
import Ava from './ava/Ava'
import Description from './description/Description'
import ImageContent from './content_image/content_image'


const Content = () => {
    return(
    <div className={s.Content}>
        <ImageContent/>
        <Ava/>
        <Description/>
        <MyPosts/>
        <NewPosts/>
        <Posts message="Hello my friend" likesCount="15" />
        <Posts message="I'm fine" likesCount="20" />
        </div>
    )  
}

export default Content;