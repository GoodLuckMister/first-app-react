import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import Content from "./Content";
import { setUserProfile } from "../redux/content-page-reducer";

class contentClassContainer extends React.Component {
  componentDidMount() {
    return axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Content {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.contentPage.posts,
    profile: state.contentPage.profile,
  };
};

/*
const mapDispatchToProps = (dispatch) => {
  return {};
};
*/

const ContentContainer = connect(mapStateToProps, { setUserProfile })(
  contentClassContainer
);

export default ContentContainer;
