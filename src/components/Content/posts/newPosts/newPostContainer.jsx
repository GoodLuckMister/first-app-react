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
    let text = newPostElement.current.value;
    props.dispatch(actionUpdateNewPost(text));
  };

  return (
    <NewPosts actionUpdateNewPost={onPostChange} actionAddPost={addPosts} />
  );
};

export default NewPostsContainer;
