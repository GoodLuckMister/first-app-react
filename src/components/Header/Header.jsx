import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.Header}>
      <img src="https://cdn.worldvectorlogo.com/logos/maserati.svg" />
      <NavLink to="/login">
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : "login"}
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
