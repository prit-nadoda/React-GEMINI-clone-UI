import React from "react";
import ChatList from "./ChatList";
import Options from "./Options";

const Sidebar = () => {
  const chatNames = [
    "How to build UI of Gemin..",
    "Learning MERN stack",
    "AI prompt engineering",
    "Fundamentals of Node.js...",
    "Set CSS properties to no..",
  ];

  const options = [
    {
      icon: "fa fa-question-circle-o",
      text: "Help",
    },
    {
      icon: "fa fa-history",
      text: "Help",
    },
    {
      icon: "fa fa-cog",
      text: "Help",
    },
  ];
  return (
    <>
      <div className="sidebar">
        <div className="menu-icon">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
        <div className="new-chat">
          <button>
            <p>+</p>
            <span>New chat</span>
          </button>
        </div>
        <div className="side-main">
          <div className="title">
            <p>Recent</p>
          </div>
          <div className="chat-list">
            {chatNames.map((chat, index) => {
              return <ChatList key={index} text={chat} />;
            })}
          </div>
        </div>

        <dic className="side-bottom">
          {options.map((option, index) => {
            return <Options text={option.text} icon={option.icon} />;
          })}
          <div className="upgrade">
            <img src="/star.png" alt="Gemini Logo" />
            <p>Upgrade to Gemini Advanced</p>
          </div>
        </dic>
      </div>
    </>
  );
};

export default Sidebar;
