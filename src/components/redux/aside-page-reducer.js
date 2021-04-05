let initialState = {
  asideSet: [
    { id: "/content", paragraph: "Profile" },
    { id: "/dialogs", paragraph: "Messages" },
    { id: "/users", paragraph: "Users" },
    { id: "/news", paragraph: "News" },
    { id: "/music", paragraph: "Music" },
    { id: "/settings", paragraph: "Settings" },
  ],
};

const reducerAsidePage = (state = initialState, action) => {
  return state;
};

export default reducerAsidePage;
