import React from "react";
import s from "./Ava.module.css";

const Ava = (props) => {
  return (
    <div className={s.Ava}>
      <img src={props.photo} alt="avatar" />
    </div>
  );
};

export default Ava;
