import React from "react";
import preloaderSVG from "../../images/BeanEater.svg";

let Preloader = () => {
  return (
    <div>
      <img src={preloaderSVG} alt="loader" />
    </div>
  );
};
export default Preloader;
