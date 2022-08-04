import React from "react";
import "./topbar.css";
import { useNavigate } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="left">
        <div className="text" onClick={() => navigate("/")}>
          Pokemon
        </div>
        <span className="text feature" onClick={() => navigate("features")}>
          Features
        </span>
      </div>
      <div className="right">
        <SearchBox />
        <button className="btn" onClick={() => navigate("login")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Topbar;
