const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { message: "Hello my friend", likesCount: 15 },
    { message: "I'm fine", likesCount: 20 },
  ],
  newPostText: "hello js",
};

const updatePostPage = (state = initialState, action) => {
  let stateCopy = { ...state };
  stateCopy.posts = [...state.posts];

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        message: stateCopy.newPostText,
        likesCount: 0,
      };

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";

      break;
    case UPDATE_NEW_POST_TEXT:
      stateCopy.newPostText = action.newText;

      break;
    default:
      return stateCopy;
  }
  return stateCopy;
};

export const actionAddPost = () => ({ type: ADD_POST });
export const actionUpdateNewPost = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default updatePostPage;
