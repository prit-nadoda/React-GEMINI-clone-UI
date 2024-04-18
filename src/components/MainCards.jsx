import React from "react";

const MainCards = (props) => {
  return (
    <div className="card">
      <div className="card-text">
        <p>{props.text}</p>
      </div>
      <div className="icon">
        <div className="wrapper">
          <i class={props.icon} aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
