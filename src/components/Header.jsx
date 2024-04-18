import React from "react";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          Gemini<i class="fa fa-caret-down" aria-hidden="true"></i>
        </div>
        <div className="profile">
          <img src="../profile.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Header;
