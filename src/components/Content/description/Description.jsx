import React from "react";
import s from "./Description.module.css";

const Description = (props) => {
  return <div className={s.Description}>{props.aboutMe}</div>;
};

export default Description;
