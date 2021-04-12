const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
};

const updateUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: true,
            };
          }
          return u;
        }),
      };
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUserCount: action.count,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, id: userId });
export const unfollowAC = (userId) => ({ type: UN_FOLLOW, id: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalCountAC = (totalUserCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUserCount,
});
export default updateUsers;
