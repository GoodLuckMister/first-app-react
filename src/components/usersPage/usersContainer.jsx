import { connect } from "react-redux";
import Users from "./users";
import { followAC, unfollowAC, setUsers } from "../redux/users-page-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (userId) => {
      dispatch(setUsers(userId));
    },
  };
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;