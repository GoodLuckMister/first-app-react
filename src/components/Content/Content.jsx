import React, { } from 'react';
import s from'./Content.module.css';
import Posts from './posts/Posts';
import NewPosts from './posts/newPosts/newPosts'
import MyPosts from './posts/myPosts/MyPosts'
import Ava from './ava/Ava'
import Description from './description/Description'
import ImageContent from './content_image/content_image'


const Content = (props) => {
    let postData = [
        {message: 'Hello my friend', likesCount: 15},
        {message: 'I\'m fine', likesCount: 20}
    ]
    return(
    <div>
        <ImageContent/>
        <div className={s.homePage}>
        <Ava/>
        <Description/>
        <MyPosts/>
        <NewPosts/>
        <Posts message={postData[0].message} likesCount={postData[0].likesCount} />
        <Posts message={postData[1].message} likesCount={postData[1].likesCount}/>
        </div>
        </div>
    )  
}

export default Content;