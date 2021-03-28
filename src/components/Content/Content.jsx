import React from "react";
import s from "./Content.module.css";

import MyPosts from "./posts/myPosts/MyPosts";
import Ava from "./ava/Ava";
import Description from "./description/Description";
import ImageContent from "./content_image/content_image";
import Posts from "./posts/Posts";
import NewPostsContainer from "./posts/newPosts/newPostContainer";

const Content = (props) => {
  let postsData = props.posts.map((p) => (
    <Posts message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div>
      <ImageContent />
      <div className={s.homePage}>
        <Ava />
        <Description />
        <MyPosts />
        <NewPostsContainer />
        {postsData}
      </div>
    </div>
  );
};

export default Content;
