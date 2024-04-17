import React, { useEffect } from "react";
import { handleChatHover } from "../assets/app.js";

const ChatList = (props) => {
  useEffect(() => {
    handleChatHover();
  }, []);
  return (
    <>
      <div className="chat-item">
        <div className="chat-icon">
          <img src="/chat-icon.png" alt="msg-icon" />
        </div>
        <div className="text">
          <p>{props.text}</p>
        </div>
        <div className="more-icon">
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
};

export default ChatList;
