const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      name: "Andre",
      statusPage: "description",
      cityName: "Kiev",
      countryName: "Ukraine",
    },
    {
      id: 2,
      followed: true,
      name: "Dmitri",
      statusPage: "description",
      cityName: "Moscow",
      countryName: "Russia",
    },
    {
      id: 3,
      followed: false,
      name: "Ignat",
      statusPage: "description",
      cityName: "Minsk",
      countryName: "Belarus",
    },
  ],
};

const updateUsers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.Id === action.userId) {
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
          if (u.Id === action.userId) {
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
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, id: userId });
export const unfollowAC = (userId) => ({ type: UN_FOLLOW, id: userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export default updateUsers;
