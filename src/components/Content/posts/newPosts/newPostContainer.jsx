import React from "react";
import { connect } from "react-redux";
import {
  actionAddPost,
  actionUpdateNewPost,
} from "../../../redux/content-page-reducer";
import NewPosts from "./newPosts";

const mapStateToProps = (state) => {
  return {
    newPostText: state.contentPage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actionAddPost: () => {
      dispatch(actionAddPost());
    },
    actonCreateUpdateNewPost: (text) => {
      dispatch(actionUpdateNewPost(text));
    },
  };
};

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

export default NewPostContainer;
