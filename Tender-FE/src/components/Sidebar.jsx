import React, { useState } from "react";
import "../components/Sidebar.css";
import { Link } from "react-router-dom";
import {
  Home,
  Archive,
  Inbox,
  LogOut,
  CheckSquare,
  BookOpen,
} from "lucide-react"; // If you use lucide icons
// If not, replace with your own SVGs

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={24} />, path: "/" },
    { name: "All Bid", icon: <Inbox size={24} />, path: "/all-bid" },
    { name: "Active", icon: <CheckSquare size={24} />, path: "/active" },
    { name: "Archive", icon: <BookOpen size={24} />, path: "/archive" },
    { name: "Submitted", icon: <Archive size={24} />, path: "/submitted" },
  ];

  return (
    <div
      className={`sidebar ${isOpen ? "expanded" : ""}`}
    //   onMouseEnter={() => setIsOpen(true)}
    //   onMouseLeave={() => setIsOpen(false)}
    >
      <div className="menu-top">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="menu-item">
            <div className="icon">{item.icon}</div>
            {isOpen && <span className="label">{item.name}</span>}

            {/* Tooltip */}
            {!isOpen && (
              <div className="tooltip">
                {item.name}
              </div>
            )}
          </Link>
        ))}
      </div>

      <div className="menu-bottom">
        <Link to="/logout" className="menu-item logout">
          <div className="icon">
            <LogOut size={24} />
          </div>
          {isOpen && <span className="label">Logout</span>}

          {!isOpen && <div className="tooltip">Logout</div>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
