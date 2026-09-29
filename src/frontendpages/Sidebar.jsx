import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar">

      {/* Sidebar Header */}
      <div className="sidebar-header">
        <span className="menu-icon">☰</span>
        <span>MAIN MENU</span>
      </div>

      {/* Menu */}
      <div className="sidebar-menu">

        <Link
          to="/admin"
          className={
            location.pathname === "/admin"
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <span className="sidebar-icon">🏠</span>
          <span>Dashboard</span>
        </Link>

        <Link
          to="/admin/books"
          className={
            location.pathname === "/admin/books"
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <span className="sidebar-icon">📚</span>
          <span>Books</span>
        </Link>

        <Link
          to="/admin/users"
          className={
            location.pathname === "/admin/users"
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <span className="sidebar-icon">👥</span>
          <span>Users</span>
        </Link>

        <Link
          to="/admin/issue-return"
          className={
            location.pathname === "/admin/issue-return"
              ? "sidebar-link active"
              : "sidebar-link"
          }
        >
          <span className="sidebar-icon">🔄</span>
          <span>Issue / Return</span>
        </Link>

      </div>

      {/* Bottom Section */}
      <div className="sidebar-bottom">

        <div className="help-box">
          <div className="help-icon">
            💡
          </div>

          <div>
            <strong>Need Help?</strong>
            <p>Contact library support</p>
          </div>
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;