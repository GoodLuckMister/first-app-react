import React, {} from 'react';
import s from './Content.module.css';
import Posts from './posts/Posts';
import NewPosts from './posts/newPosts/newPosts'
import MyPosts from './posts/myPosts/MyPosts'
import Ava from './ava/Ava'
import Description from './description/Description'
import ImageContent from './content_image/content_image'


const Content = () => {
    let posts = [
        {message: 'Hello my friend', likesCount: 15},
        {message: 'I\'m fine', likesCount: 20}

    ]
    let postsData = posts.map(p => <Posts message={p.message} likesCount={p.likesCount}/>)
    return (
        <div>
            <ImageContent/>
            <div className={s.homePage}>
                <Ava/>
                <Description/>
                <MyPosts/>
                <NewPosts/>
                {postsData}
            </div>
        </div>
    )
}

export default Content;