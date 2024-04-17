import React, { useEffect } from "react";
import { handleOptionHover } from "../assets/app.js";

const Options = (props) => {
  useEffect(() => {
    handleOptionHover();
  }, []);
  return (
    <>
      <div className="option">
        <div className="icon">
          <i class={props.icon} aria-hidden="true"></i>
        </div>
        <span className="text">{props.text}</span>
      </div>
    </>
  );
};

export default Options;
