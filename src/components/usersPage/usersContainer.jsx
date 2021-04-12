import { connect } from "react-redux";
import Users from "./usersClass";
import {
  followAC,
  unfollowAC,
  setUsers,
  setCurrentPageAC,
  setTotalCountAC,
} from "../redux/users-page-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUserCount: state.userPage.totalUserCount,
    currentPage: state.userPage.currentPage,
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
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
  };
};

const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default usersContainer;
