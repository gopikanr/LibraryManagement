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

          {/* Welcome Section */}
          <div className="dashboard-header">

            <div>
              <p className="dashboard-label">
                LIBRARY OVERVIEW
              </p>

              <h1>
                Good afternoon, Admin 👋
              </h1>

              <p>
                Here's what's happening in your library today.
              </p>
            </div>

            <button className="add-book-button">
              + Add New Book
            </button>

          </div>


          {/* Statistics Cards */}
          <div className="dashboard-cards">

            <div className="stat-card books-card">

              <div className="stat-card-top">
                <div className="stat-icon">
                  📚
                </div>

                <span className="stat-badge">
                  +12%
                </span>
              </div>

              <p>Total Books</p>

              <h2>120</h2>

              <span className="stat-description">
                Books available in library
              </span>

            </div>


            <div className="stat-card users-card">

              <div className="stat-card-top">
                <div className="stat-icon">
                  👥
                </div>

                <span className="stat-badge">
                  +8%
                </span>
              </div>

              <p>Total Users</p>

              <h2>50</h2>

              <span className="stat-description">
                Registered library users
              </span>

            </div>


            <div className="stat-card issued-card">

              <div className="stat-card-top">
                <div className="stat-icon">
                  📖
                </div>

                <span className="stat-badge">
                  +5%
                </span>
              </div>

              <p>Issued Books</p>

              <h2>25</h2>

              <span className="stat-description">
                Currently borrowed books
              </span>

            </div>


            <div className="stat-card available-card">

              <div className="stat-card-top">
                <div className="stat-icon">
                  ✅
                </div>

                <span className="stat-badge">
                  79%
                </span>
              </div>

              <p>Available Books</p>

              <h2>95</h2>

              <span className="stat-description">
                Books ready to borrow
              </span>

            </div>

          </div>


          {/* Bottom Dashboard */}
          <div className="dashboard-grid">

            {/* Recent Books */}
            <div className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <h2>Recently Added Books</h2>
                  <p>Latest books in your library</p>
                </div>

                <button className="view-button">
                  View All
                </button>

              </div>


              <div className="book-list">

                <div className="book-item">

                  <div className="book-cover book-one">
                    📕
                  </div>

                  <div className="book-info">
                    <h3>The Great Gatsby</h3>
                    <p>F. Scott Fitzgerald</p>
                  </div>

                  <span className="book-status">
                    Available
                  </span>

                </div>


                <div className="book-item">

                  <div className="book-cover book-two">
                    📘
                  </div>

                  <div className="book-info">
                    <h3>Atomic Habits</h3>
                    <p>James Clear</p>
                  </div>

                  <span className="book-status">
                    Available
                  </span>

                </div>


                <div className="book-item">

                  <div className="book-cover book-three">
                    📗
                  </div>

                  <div className="book-info">
                    <h3>Clean Code</h3>
                    <p>Robert C. Martin</p>
                  </div>

                  <span className="issued-status">
                    Issued
                  </span>

                </div>


                <div className="book-item">

                  <div className="book-cover book-four">
                    📙
                  </div>

                  <div className="book-info">
                    <h3>Rich Dad Poor Dad</h3>
                    <p>Robert Kiyosaki</p>
                  </div>

                  <span className="book-status">
                    Available
                  </span>

                </div>

              </div>

            </div>


            {/* Quick Actions */}
            <div className="dashboard-panel">

              <div className="panel-header">

                <div>
                  <h2>Quick Actions</h2>
                  <p>Common library tasks</p>
                </div>

              </div>


              <div className="quick-actions">

                <button className="quick-action">
                  <span>📚</span>

                  <div>
                    <strong>Add Book</strong>
                    <small>Add a new book</small>
                  </div>

                  <b>→</b>
                </button>


                <button className="quick-action">
                  <span>👥</span>

                  <div>
                    <strong>Manage Users</strong>
                    <small>View library users</small>
                  </div>

                  <b>→</b>
                </button>


                <button className="quick-action">
                  <span>🔄</span>

                  <div>
                    <strong>Issue Book</strong>
                    <small>Issue a book</small>
                  </div>

                  <b>→</b>
                </button>


                <button className="quick-action">
                  <span>📋</span>

                  <div>
                    <strong>View Reports</strong>
                    <small>Library reports</small>
                  </div>

                  <b>→</b>
                </button>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminDashboard;