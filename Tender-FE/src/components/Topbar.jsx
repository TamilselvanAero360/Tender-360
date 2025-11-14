import React from "react";
import "./Topbar.css";
import { FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-title">Tender 360</div>

      <div className="topbar-user">
        <FaUserCircle className="topbar-user-icon" />
        <span className="topbar-username">Jose</span>
      </div>
    </div>
  );
};

export default Topbar;
