import React, { } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="appName">
      <Header/>
      <NavBar/>
      <Content/>
      
    </div>
  );
}




export default App;
