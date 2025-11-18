import React from "react";
import "../components/Topbar.css";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-title">Tender 360</div>

      <div className="topbar-user">
        <Link to="/profile">
        <FaUserCircle className="topbar-user-icon" />
        </Link>
        <span className="topbar-username">Jose</span>
      </div>
    </div>
  );
};

export default Topbar;
