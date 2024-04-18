import React from "react";
import Header from "./Header";
import Chatinput from "./Chatinput";
import MainCards from "./MainCards";
import LongCard from "./LongCard";

const MainSection = () => {
  const cardData = [
    {
      text: "Help me draft a response to a friend",
      icon: "fa fa-pencil-square-o",
    },
    {
      text: "Write a thank you note to my colleague",
      icon: "fa fa-pencil-square-o",
    },
    {
      text: "Help coding a database schema for a business",
      icon: "fa fa-code",
    },
    {
      text: "Help me sound like an expert for an upcoming trip",
      icon: "fa fa-lightbulb-o",
    },
  ];

  const LongText = [
    {
      text: "Your conversations are processed by human reviewers to improve the technologies powering Gemini Apps. Don’t enter anything you wouldn’t want reviewed or used.",
    },
    {
      text: "Gemini, like any tool, isn't infallible and may be bias at some point. It's always a good idea to double-check important details yourself.",
    },
  ];
  return (
    <>
      <Header />
      <div className="main-section">
        <div className="chat-main">
          <div className="welcome">
            <div className="line l1">Hello, Prit</div>
            <div className="line">How can I help you today?</div>
          </div>
          <div className="main-cards">
            {cardData.map((data) => {
              return <MainCards text={data.text} icon={data.icon} />;
            })}
          </div>
          <div className="long-card-container">
            {LongText.map((data, index) => {
              return <LongCard key={index} text={data.text} />;
            })}
          </div>
          <div className="empty">Thank You</div>
        </div>
      </div>
      <Chatinput />
    </>
  );
};

export default MainSection;
