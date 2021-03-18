import React from "react";
import {
  actionAddPost,
  actionUpdateNewPost,
} from "../../../redux/post-page-reducer";
import s from "./newPosts.module.css";

const NewPosts = (props) => {
  let newPostElement = React.createRef();
  let addPosts = () => {
    props.dispatch(actionAddPost());
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(actionUpdateNewPost(text));
  };
  return (
    <div className={s.NewPosts}>
      <div className={s.title}>New post</div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        value={props.newPostText}
      />
      <button onClick={addPosts} className={s.button}>
        send
      </button>
    </div>
  );
};

export default NewPosts;
