const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const updatePostPage = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      return state;
  }
  return state;
};

export const actionAddPost = () => ({ type: ADD_POST });
export const actionUpdateNewPost = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default updatePostPage;
