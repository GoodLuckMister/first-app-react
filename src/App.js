import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import ContentContainer from "./components/Content/ContentContainer";
import Header from "./components/Header/Header";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/usersPage/usersContainer";

const App = (props) => {
  return (
    <div className="appName">
      <Header />
      <NavBarContainer />
      <div className="appName-wrapper-content">
        <Route path="/content" render={() => <ContentContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/music" render={() => <Music />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    </div>
  );
};

export default App;
