import React from "react";
import {
  actionAddPost,
  actionUpdateNewPost,
} from "../../../redux/post-page-reducer";
import NewPosts from "./newPosts";

const NewPostsContainer = (props) => {
  let addPosts = () => {
    props.dispatch(actionAddPost());
  };

  let onPostChange = (text) => {
    props.dispatch(actionUpdateNewPost(text));
  };

  return (
    <NewPosts
      actonCreateUpdateNewPost={onPostChange}
      actionAddPost={addPosts}
      newPostText={props.newPostText}
    />
  );
};

export default NewPostsContainer;
