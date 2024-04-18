import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import MainSection from "./components/MainSection.jsx";
const App = () => {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
};

export default App;
