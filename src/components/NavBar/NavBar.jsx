import React, { } from 'react';
import s from './NavBar.module.css';
console.log(s);
const NavBar = () => {
    return     <nav className={s.NavBar}>
        <ul>
        <li className={s.item}><a className={`${s.link}${s.activ}`} href="#s">Profile</a></li>
        <li className={s.item}><a className={s.link} href="#s">Messages</a></li>
        <li className={s.item}><a className={s.link} href="#s">News</a></li>
        <li className={s.item}><a className={s.link} href="#s">Music</a></li>
        <li className={s.item}><a className={s.link} href="#s">Settings</a></li>
        </ul>
    </nav>
        
}

export default NavBar;