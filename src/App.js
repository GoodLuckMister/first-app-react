import React, {} from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (

        <div className="appName">
            <Header/>
            <NavBar state={props.state.asidePage}/>
            <div className="appName-wrapper-content">
                <Route path='/content' render={() =>
                    <Content state={props.state.contentPage} addPost={props.addPost}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}


export default App;
