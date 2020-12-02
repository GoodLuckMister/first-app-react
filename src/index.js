import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message: 'Hello my friend', likesCount: 15},
    {message: 'I\'m fine', likesCount: 20}]

let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Kolya'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Tolik'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Roma'}
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'I coming you'},
    {id: 3, message: 'Babe got me'},
    {id: 4, message: 'You actor man'}
]

ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



