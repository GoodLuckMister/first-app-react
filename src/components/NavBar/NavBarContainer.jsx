import { connect } from "react-redux";
import NavBar from "./NavBar";

const mapStateToProps = (state) => {
  return {
    asideSet: state.asidePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;
