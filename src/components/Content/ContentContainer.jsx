import { connect } from "react-redux";
import Content from "./Content";

const mapStateToProps = (state) => {
  return {
    posts: state.contentPage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
