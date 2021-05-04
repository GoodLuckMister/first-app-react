import React from "react";
import { authAPI } from "../API/api";
import { connect } from "react-redux";
import Header from "./Header";
import { setAuthUserData } from "../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    return authAPI.getAuth().then((data) => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
