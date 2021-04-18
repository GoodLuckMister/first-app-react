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
    <Posts key={p.id} message={p.message} likesCount={p.likesCount} />
  ));
  if (!props.profile) {
    return <> </>;
  }
  return (
    <div>
      <ImageContent />
      <div className={s.homePage}>
        <Ava photo={props.profile.photos.large} />
        <Description aboutMe={props.profile.aboutMe} />
        <MyPosts />
        <NewPostsContainer />
        {postsData}
      </div>
    </div>
  );
};

export default Content;
