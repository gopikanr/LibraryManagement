import React from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  return (
    <div className="admin-page">

      <Navbar />

      <div className="admin-layout">

        <Sidebar />

        <main className="dashboard-content">

          <h1>Admin Dashboard</h1>

          <p>
            Welcome to the Library Management System Admin Dashboard.
          </p>

          <div className="dashboard-cards">

            <div className="card">
              <h2>Total Books</h2>
              <p>120</p>
            </div>

            <div className="card">
              <h2>Total Users</h2>
              <p>50</p>
            </div>

            <div className="card">
              <h2>Issued Books</h2>
              <p>25</p>
            </div>

            <div className="card">
              <h2>Available Books</h2>
              <p>95</p>
            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;