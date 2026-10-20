
import { useNavigate } from "react-router-dom";

function ReturnedBooks() {
  const navigate = useNavigate();

  const returnedBooks = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      issueDate: "01-09-2026",
      returnDate: "15-09-2026",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      issueDate: "05-09-2026",
      returnDate: "19-09-2026",
    },
  ];

  return (
    <div className="returned-books-container">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Dashboard
      </button>

      <div className="returned-books-header">
        <div>
          <p className="returned-books-label">
            LIBRARY / RETURNED BOOKS
          </p>
          <h1>Returned Books</h1>
          <p className="page-description">
            View the books you have previously returned to the library.
          </p>
        </div>

        <div className="returned-books-total">
          <span className="returned-books-total-icon">📚</span>
          <div>
            <h2>{returnedBooks.length}</h2>
            <p>Returned Books</p>
          </div>
        </div>
      </div>

      <div className="returned-books-info">
        <div className="returned-info-icon">✓</div>
        <div>
          <h3>Return History</h3>
          <p>
            Keep track of the books you have returned to the library.
          </p>
        </div>
      </div>

      <div className="returned-books-section">
        <div className="returned-books-section-heading">
          <h2>Previously Returned</h2>
          <span>{returnedBooks.length} books</span>
        </div>

        <div className="returned-books-table-card">
          <table className="books-table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>BOOK TITLE</th>
                <th>AUTHOR</th>
                <th>ISSUE DATE</th>
                <th>RETURN DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {returnedBooks.map((book, index) => (
                <tr key={book.id}>
                  <td>{index + 1}</td>
                  <td className="book-title">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.issueDate}</td>
                  <td>{book.returnDate}</td>
                  <td>
                    <span className="returned-status-badge">
                      <span className="returned-status-dot"></span>
                      Returned
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {returnedBooks.length === 0 && (
          <div className="returned-books-empty">
            <span>📚</span>
            <h3>No Returned Books</h3>
            <p>Your returned books will appear here.</p>
          </div>
        )}
      </div>

      <p className="returned-books-footer">
        Showing {returnedBooks.length} returned books
      </p>
    </div>
  );
}

export default ReturnedBooks;
