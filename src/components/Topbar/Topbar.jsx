import React from "react";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="left">
        <div className="text">Pokemon</div>
        <span className="text">Features</span>
      </div>
      <div className="right">
        <button className="btn">Login</button>
      </div>
    </div>
  );
};

export default Topbar;
