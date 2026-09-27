import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h3>Admin Menu</h3>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/books">
        Books
      </Link>

      <Link to="/admin/users">
        Users
      </Link>

      <Link to="/admin/issue-return">
        Issue / Return
      </Link>

    </aside>
  );
}

export default Sidebar;