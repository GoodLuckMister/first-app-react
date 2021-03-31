import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  let asideSetBar = props.asideSet.asideSet.map((par) => (
    <NavLink
      to={par.id}
      key={par.id}
      className={s.link}
      activeClassName={s.activLink}
    >
      {par.paragraph}
    </NavLink>
  ));
  return (
    <nav className={s.NavBar}>
      <div className={s.item}>{asideSetBar}</div>
    </nav>
  );
};

export default NavBar;
