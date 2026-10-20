
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AdminDashboard() {
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [books, setBooks] = useState([
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", quantity: 1 },
    { id: 2, title: "Atomic Habits", author: "James Clear", quantity: 1 },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", quantity: 1 },
    { id: 4, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", quantity: 1 }
  ]);

  const [form, setForm] = useState({
    title: "",
    author: "",
    isbn: "",
    category: "",
    quantity: "1"
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    const quantity = Number(form.quantity);

    if (!Number.isInteger(quantity) || quantity < 1) {
      alert("Please enter a valid quantity of at least 1.");
      return;
    }

    setBooks((previousBooks) => [
      {
        ...form,
        id: Date.now(),
        quantity
      },
      ...previousBooks
    ]);

    setForm({
      title: "",
      author: "",
      isbn: "",
      category: "",
      quantity: "1"
    });

    setShowForm(false);
    alert("Book added successfully!");
  };

  const openAddBook = () => setShowForm(true);

  return (
    <div className="admin-page">
      <Navbar />

      <div className="admin-layout">
        <Sidebar />

        <main className="dashboard-content">
          <div className="dashboard-header">
            <div>
              <p className="dashboard-label">LIBRARY OVERVIEW</p>
              <h1>Good afternoon, Admin 👋</h1>
              <p>Here's what's happening in your library today.</p>
            </div>

            <button
              className="add-book-button"
              onClick={openAddBook}
            >
              + Add New Book
            </button>
          </div>

          <div className="dashboard-cards">
            <div className="stat-card books-card">
              <div className="stat-card-top">
                <div className="stat-icon">📚</div>
                <span className="stat-badge">Library</span>
              </div>
              <p>Total Books</p>
              <h2>{books.reduce((total, book) => total + book.quantity, 0)}</h2>
              <span className="stat-description">Total book copies</span>
            </div>

            <div className="stat-card users-card">
              <div className="stat-card-top">
                <div className="stat-icon">👥</div>
                <span className="stat-badge">Users</span>
              </div>
              <p>Total Users</p>
              <h2>50</h2>
              <span className="stat-description">Registered library users</span>
            </div>

            <div className="stat-card issued-card">
              <div className="stat-card-top">
                <div className="stat-icon">📖</div>
                <span className="stat-badge">Issued</span>
              </div>
              <p>Issued Books</p>
              <h2>25</h2>
              <span className="stat-description">Currently borrowed books</span>
            </div>

            <div className="stat-card available-card">
              <div className="stat-card-top">
                <div className="stat-icon">✅</div>
                <span className="stat-badge">Available</span>
              </div>
              <p>Available Books</p>
              <h2>{books.reduce((total, book) => total + book.quantity, 0) - 25}</h2>
              <span className="stat-description">Estimate based on demo data</span>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-panel">
              <div className="panel-header">
                <div>
                  <h2>Recently Added Books</h2>
                  <p>Latest books in your library</p>
                </div>

                <button
                  className="view-button"
                  onClick={() => navigate("/admin/books")}
                >
                  View All
                </button>
              </div>

              <div className="book-list">
                {books.slice(0, 5).map((book, index) => (
                  <div className="book-item" key={book.id}>
                    <div className={`book-cover book-${["one", "two", "three", "four"][index % 4]}`}>
                      📚
                    </div>

                    <div className="book-info">
                      <h3>{book.title}</h3>
                      <p>{book.author}</p>
                    </div>

                    <span className="book-status">
                      {book.quantity} {book.quantity === 1 ? "copy" : "copies"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="dashboard-panel">
              <div className="panel-header">
                <div>
                  <h2>Quick Actions</h2>
                  <p>Common library tasks</p>
                </div>
              </div>

              <div className="quick-actions">
                <button className="quick-action" onClick={openAddBook}>
                  <span>📚</span>
                  <div>
                    <strong>Add Book</strong>
                    <small>Add a new book</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/books")}
                >
                  <span>📖</span>
                  <div>
                    <strong>Manage Books</strong>
                    <small>View book collection</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/users")}
                >
                  <span>👥</span>
                  <div>
                    <strong>Manage Users</strong>
                    <small>View library users</small>
                  </div>
                  <b>→</b>
                </button>

                <button
                  className="quick-action"
                  onClick={() => navigate("/admin/issue-return")}
                >
                  <span>🔄</span>
                  <div>
                    <strong>Issue / Return</strong>
                    <small>Manage book lending</small>
                  </div>
                  <b>→</b>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {showForm && (
        <div
          className="book-modal-overlay"
          onClick={() => setShowForm(false)}
        >
          <div
            className="book-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-book-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="book-modal-header">
              <div>
                <h2 id="add-book-heading">Add New Book</h2>
                <p>Enter the book details below.</p>
              </div>

              <button
                type="button"
                className="modal-close"
                onClick={() => setShowForm(false)}
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleAddBook}>
              <label htmlFor="title">Book Title *</label>
              <input
                id="title"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter book title"
                required
              />

              <label htmlFor="author">Author *</label>
              <input
                id="author"
                name="author"
                value={form.author}
                onChange={handleChange}
                placeholder="Enter author name"
                required
              />

              <label htmlFor="isbn">ISBN</label>
              <input
                id="isbn"
                name="isbn"
                value={form.isbn}
                onChange={handleChange}
                placeholder="Enter ISBN"
              />

              <label htmlFor="category">Category</label>
              <input
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                placeholder="e.g. Programming"
              />

              <label htmlFor="quantity">Quantity *</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                step="1"
                value={form.quantity}
                onChange={handleChange}
                required
              />

              <div className="book-modal-actions">
                <button
                  type="button"
                  className="modal-cancel"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="add-book-button">
                  Save Book
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
