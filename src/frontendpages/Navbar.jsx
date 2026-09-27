import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">

      <div className="navbar-title">
        <h2>Library Management System</h2>
      </div>

      <div className="navbar-right">

        <span>Admin</span>

        <button onClick={handleLogout}>
          Logout
        </button>

      </div>

    </nav>
  );
}

export default Navbar;