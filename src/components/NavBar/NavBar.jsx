import React, { } from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
console.log(s);
const NavBar = () => {
    return     <nav className={s.NavBar}>
        <ul>
        <li className={s.item}><NavLink to='/content' className={s.link} activeClassName={s.activLink}>Profile</NavLink></li>
        <li className={s.item}><NavLink to='/dialogs' className={s.link} activeClassName={s.activLink}>Messages</NavLink></li>
        <li className={s.item}><NavLink to='/news' className={s.link} activeClassName={s.activLink}>News</NavLink></li>
        <li className={s.item}><NavLink to='/music' className={s.link} activeClassName={s.activLink}>Music</NavLink></li>
        <li className={s.item}><NavLink to='/settings' className={s.link} activeClassName={s.activLink}>Settings</NavLink></li>
        </ul>
    </nav>
        
}

export default NavBar;