import React from "react";
import * as axios from "axios";
import { connect } from "react-redux";
import Content from "./Content";
import { setUserProfile } from "../redux/content-page-reducer";
import { withRouter } from "react-router";

class contentClassContainer extends React.Component {
  componentDidMount() {
    let usersId = this.props.match.params.userId;
    if (!usersId) {
      usersId = 2;
    }
    return axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${usersId}`)
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
let withUrlDataContainerComponent = withRouter(contentClassContainer);

const ContentContainer = connect(mapStateToProps, { setUserProfile })(
  withUrlDataContainerComponent
);

export default ContentContainer;
