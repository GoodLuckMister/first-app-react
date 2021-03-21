import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  console.log(props);
  debugger;
  let asideSetBar = props.state.asideSet.map((par) => (
    <NavLink to={par.id} className={s.link} activeClassName={s.activLink}>
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
