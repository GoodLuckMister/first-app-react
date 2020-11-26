import React, {} from 'react';
import  {BrowserRouter,Route} from "react-router-dom";
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Dialogs from './components/Dialogs/Dialogs';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="appName">
                <Header/>
                <NavBar/>
                <div class="appName-wrapper-content">
                    <Route path='/content' component={Content}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
