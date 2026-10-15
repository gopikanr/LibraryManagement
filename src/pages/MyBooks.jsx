
import { useNavigate } from "react-router-dom";

function MyBooks() {
  const navigate = useNavigate();

  const myBooks = [
    {
      id: 1,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Fiction",
      status: "Issued",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "Programming",
      status: "Issued",
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      status: "Returned",
    },
  ];

  const issuedCount = myBooks.filter(
    (book) => book.status === "Issued"
  ).length;

  const returnedCount = myBooks.filter(
    (book) => book.status === "Returned"
  ).length;

  return (
    <div className="my-books-container">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <div className="my-books-header">
        <div>
          <p className="my-books-label">LIBRARY / MY BOOKS</p>
          <h1>My Books</h1>
          <p className="page-description">
            Track your borrowed and returned books in one place.
          </p>
        </div>

        <div className="my-books-total">
          <span className="my-books-total-icon">📚</span>
          <div>
            <h2>{myBooks.length}</h2>
            <p>Total Books</p>
          </div>
        </div>
      </div>

      <div className="my-books-stats">
        <div className="my-books-stat-card">
          <div className="my-books-stat-icon issued-icon">📖</div>
          <div>
            <p>Currently Issued</p>
            <h2>{issuedCount}</h2>
          </div>
        </div>

        <div className="my-books-stat-card">
          <div className="my-books-stat-icon returned-icon">✓</div>
          <div>
            <p>Returned Books</p>
            <h2>{returnedCount}</h2>
          </div>
        </div>
      </div>

      <div className="my-books-section-heading">
        <div>
          <h2>Your Book Collection</h2>
          <p>View the details and status of your books.</p>
        </div>
      </div>

      <div className="my-books-card">
        <table className="books-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>BOOK TITLE</th>
              <th>AUTHOR</th>
              <th>CATEGORY</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            {myBooks.map((book, index) => (
              <tr key={book.id}>
                <td>{index + 1}</td>
                <td className="book-title">{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <span className="my-books-category">
                    {book.category}
                  </span>
                </td>
                <td>
                  <span
                    className={`my-books-status ${
                      book.status === "Issued"
                        ? "status-issued"
                        : "status-returned"
                    }`}
                  >
                    <span className="status-dot"></span>
                    {book.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="my-books-footer">
        Showing {myBooks.length} books in your collection
      </p>
    </div>
  );
}

export default MyBooks;
