import React from "react";

const Chatinput = () => {
  return (
    <>
      <div className="main-bottom">
        <div className="input-field">
          <div className="input">
            <input type="text" placeholder="Enter a prompt here" />
          </div>
          <div className="icons">
            <i class="fa fa-picture-o" aria-hidden="true"></i>
            <i class="fa fa-microphone" aria-hidden="true"></i>
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          </div>
        </div>
        <div className="bottom-text">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. <a href="">Your privacy & Gemini Apps</a>
        </div>
      </div>
    </>
  );
};

export default Chatinput;
