import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* Logo / Brand */}
      <div className="navbar-brand">
        <div className="navbar-logo">
          📚
        </div>

        <div>
          <h2>Library Management</h2>
          <span>Admin Panel</span>
        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-right">

        <button className="notification-button">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="admin-profile">
          <div className="admin-avatar">
            A
          </div>

          <div className="admin-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>
        </div>

        <button
          className="logout-button"
          onClick={handleLogout}
        >
          ↪
          <span>Logout</span>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;