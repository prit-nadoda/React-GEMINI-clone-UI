import React from "react";

const LongCard = (props) => {
  return (
    <>
      <div className="long-card">
        <div className="card-icon">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
        </div>
        <div className="col-2">
          <div className="card-text">
            <p>{props.text}</p>
          </div>
          <div className="card-btn">
            <button>How it works?</button>
            <button>Dismiss</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LongCard;
