const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { message: "Hello my friend", likesCount: 15 },
    { message: "I'm fine", likesCount: 20 },
  ],
  newPostText: "hello js",
  profile: null,
};

const updatePostPage = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const actionAddPost = () => ({ type: ADD_POST });
export const actionUpdateNewPost = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export default updatePostPage;
